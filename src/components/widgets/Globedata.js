import ThreeGlobe from 'three-globe';
import { WebGLRenderer, Scene } from 'three';
import {
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Color,
  Fog,
  // AxesHelper,
  // DirectionalLightHelper,
  // CameraHelper,
  PointLight,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import countries from '~/assets/files/globe-data-min.json';
import travelHistory from '~/assets/files/my-flights.json';
import airportHistory from '~/assets/files/my-airports.json';

let mydoc = document.getElementById('viewport');
var renderer, camera, scene, controls;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = mydoc.offsetWidth / 2;
let windowHalfY = mydoc.offsetHeight / 2;
var Globe;

init();
initGlobe();
onWindowResize();
animate();

// SECTION Initializing core ThreeJS elements
function init() {
  // Initialize renderer

  renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(mydoc.offsetWidth, mydoc.offsetHeight);
  // renderer.outputEncoding = THREE.sRGBEncoding;
  mydoc.appendChild(renderer.domElement);

  // Initialize scene, light
  scene = new Scene();
  scene.add(new AmbientLight(0xbbbbbb, 0.3));
  scene.background = new Color(0xff7626);

  // Initialize camera, light
  camera = new PerspectiveCamera();
  camera.aspect = mydoc.offsetWidth / mydoc.offsetHeight;
  camera.updateProjectionMatrix();

  var dLight = new DirectionalLight(0xffffff, 1);
  dLight.position.set(-800, 200, 400);
  camera.add(dLight);

  var dLight1 = new DirectionalLight(0x7982f6, 1);
  dLight1.position.set(-200, 500, 200);
  camera.add(dLight1);

  var dLight2 = new PointLight(0x8566cc, 0.5);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  camera.position.z = 800;
  camera.position.x = 300;
  camera.position.y = 300;

  scene.add(camera);

  // Additional effects
  scene.fog = new Fog(0xffac59, 1000, 2000);

  // Helpers
  // const axesHelper = new AxesHelper(800);
  // scene.add(axesHelper);
  // var helper = new DirectionalLightHelper(dLight);
  // scene.add(helper);
  // var helperCamera = new CameraHelper(dLight.shadow.camera);
  // scene.add(helperCamera);

  // Initialize controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dynamicDampingFactor = 0.01;
  controls.enablePan = false;
  controls.minDistance = 300;
  controls.maxDistance = 300;
  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 0;
  controls.autoRotate = false;
  controls.enableZoom = false;
  controls.onMouseMove = false;
  controls.noKeys = true;
  controls.noZoom = true;

  window.addEventListener('resize', onWindowResize, false);
  document.addEventListener('mousemove', onMouseMove);
}

// SECTION Globe
function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.6)
    .showAtmosphere(true)
    .atmosphereColor('#ffffff')
    .atmosphereAltitude(0.2)
    .hexPolygonColor((e) => {
      if (['DZA', 'USA', 'GBR', 'FRA', 'ARE', 'TUR', 'ZAF'].includes(e.properties.ISO_A3)) {
        return 'rgba(255,255,255, 1)';
      } else return 'rgba(255,0,0, 1)';
    });

  // NOTE Arc animations are followed after the globe enters the scene
  setTimeout(() => {
    Globe.arcsData(travelHistory.flights)
      .arcColor((e) => {
        return e.status ? '#2986cc' : '#34b7eb';
      })
      .arcAltitude((e) => {
        return e.arcAlt;
      })
      .arcStroke((e) => {
        return e.status ? 0.5 : 0.3;
      })
      .arcDashLength(0.9)
      .arcDashGap(4)
      .arcDashAnimateTime(1000)
      .arcsTransitionDuration(1000)
      .arcDashInitialGap((e) => e.order * 1)
      .labelsData(airportHistory.airports)
      .labelColor(() => '#ffffff')
      .labelDotOrientation((e) => {
        return e.text === 'ALA' ? 'top' : 'right';
      })
      .labelDotRadius(0.3)
      .labelSize((e) => e.size)
      .labelText('city')
      .labelResolution(6)
      .labelAltitude(0.01)
      .pointsData(airportHistory.airports)
      .pointColor(() => '#ffffff')
      .pointsMerge(true)
      .pointAltitude(0.07)
      .pointRadius(0.05);
  }, 1000);

  Globe.rotateY(-Math.PI * (5 / 9));
  Globe.rotateZ(-Math.PI / 6);
  const globeMaterial = Globe.globeMaterial();
  globeMaterial.color = new Color(0xfc782b);
  globeMaterial.emissive = new Color(0xf55b00);
  globeMaterial.emissiveIntensity = 0.4;
  globeMaterial.shininess = 0.7;
  // NOTE Cool stuff
  // globeMaterial.wireframe = true;

  scene.add(Globe);
}

function onMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
  // console.log("x: " + mouseX + " y: " + mouseY);
}

function onWindowResize() {
  camera.aspect = mydoc.offsetWidth / mydoc.offsetHeight;
  camera.updateProjectionMatrix();
  windowHalfX = mydoc.offsetWidth / 1.5;
  windowHalfY = mydoc.offsetHeight / 1.5;
  renderer.setSize(mydoc.offsetWidth, mydoc.offsetHeight);
}

function animate() {
  camera.position.x += Math.abs(mouseX) <= windowHalfX / 2 ? (mouseX / 2 - camera.position.x) * 0.0001 : 0;
  camera.position.y += (-mouseY / 2 - camera.position.y) * 0.0001;
  camera.lookAt(scene.position);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
