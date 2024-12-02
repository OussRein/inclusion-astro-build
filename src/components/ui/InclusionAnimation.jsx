import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const SolarSystem = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Set background to white

    const camera = new THREE.PerspectiveCamera(80, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft global light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Directional sunlight
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Sun
    const sunGeometry = new THREE.SphereGeometry(3, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Planet 1 (Normal Orbit)
    const planetGeometry1 = new THREE.SphereGeometry(0, 64, 64);
    const planetMaterial1 = new THREE.MeshStandardMaterial({ color: 0x2194ce });
    const planet1 = new THREE.Mesh(planetGeometry1, planetMaterial1);
    scene.add(planet1);

    const planet1OrbitRadius = 4;
    let angle1 = 0;

    // Trail for Planet 1 (Circular Effect via Alpha Transparency)
    const trail1Count = 200; // Number of trail points
    const trail1Positions = new Float32Array(trail1Count * 3); // (x, y, z) for each point
    const trail1Colors = new Float32Array(trail1Count * 3); // RGB for each point
    const trail1Sizes = new Float32Array(trail1Count); // Sizes for points

    // Initialize sizes and colors
    trail1Sizes.fill(0.1); // Default small size
    trail1Sizes[0] = 0.5; // Match planet size at the start
    for (let i = 0; i < trail1Count; i++) {
      const alpha = 1 - i / trail1Count; // Fades out along the trail
      trail1Colors[i * 3] = 0.23; // Red channel
      trail1Colors[i * 3 + 1] = 0.57; // Green channel
      trail1Colors[i * 3 + 2] = 0.8 * alpha; // Blue channel with fade
    }

    const trail1Geometry = new THREE.BufferGeometry();
    trail1Geometry.setAttribute('position', new THREE.BufferAttribute(trail1Positions, 3));
    trail1Geometry.setAttribute('color', new THREE.BufferAttribute(trail1Colors, 3));

    const trail1Material = new THREE.PointsMaterial({
      size: 0.5, // Maximum size
      vertexColors: true, // Use per-vertex colors
      transparent: true,
      opacity: 0.8,
    });

    const trail1 = new THREE.Points(trail1Geometry, trail1Material);
    scene.add(trail1);


    // Planet 2 (Reverse Orbit, Tilted by 30 degrees)
    const planetGeometry2 = new THREE.SphereGeometry(0, 64, 64);
    const planetMaterial2 = new THREE.MeshStandardMaterial({ color: 0xff5733 });
    const planet2 = new THREE.Mesh(planetGeometry2, planetMaterial2);

    // Create a parent object for the tilted orbit
    const tiltedOrbit = new THREE.Object3D();
    tiltedOrbit.rotation.x = THREE.MathUtils.degToRad(30); // Tilt the orbit by 30 degrees
    scene.add(tiltedOrbit);
    tiltedOrbit.add(planet2); // Add the planet to the tilted orbit
    
    const planet2OrbitRadius = 3.5;
    let angle2 = 0;

    // Trail for Planet 2
    const trail2Geometry = new THREE.BufferGeometry();
    const trail2Points = new Float32Array(300); // 100 points (x, y, z)
    trail2Geometry.setAttribute('position', new THREE.BufferAttribute(trail2Points, 3));
    const trail2Material = new THREE.LineBasicMaterial({
      color: 0xff5733,
      transparent: true,
      opacity: 0.5,
    });
    const trail2 = new THREE.Line(trail2Geometry, trail2Material);
    tiltedOrbit.add(trail2);


    
    // Planet 3 (Reverse Orbit, Tilted by 30 degrees)
    const planetGeometry3 = new THREE.SphereGeometry(0, 64, 64);
    const planetMaterial3 = new THREE.MeshStandardMaterial({ color: 0xffcc33 });
    const planet3 = new THREE.Mesh(planetGeometry3, planetMaterial3);

    // Create a parent object for the tilted orbit
    const tiltedOrbit2 = new THREE.Object3D();
    tiltedOrbit2.rotation.x = THREE.MathUtils.degToRad(60); // Tilt the orbit by 30 degrees
    scene.add(tiltedOrbit2);
    tiltedOrbit2.add(planet3); // Add the planet to the tilted orbit

    const planet3OrbitRadius = 4.5;
    let angle3 = 0;

    // Trail for Planet 3 (Circular Effect via Alpha Transparency)
    const trail3Count = 100; // Number of trail points
    const trail3Positions = new Float32Array(trail3Count * 3); // (x, y, z) for each point
    const trail3Colors = new Float32Array(trail3Count * 3); // RGB for each point
    const trail3Sizes = new Float32Array(trail3Count); // Sizes for points

    // Initialize sizes and colors
    trail3Sizes.fill(0.2); // Default small size
    trail3Sizes[0] = 0.2; // Match planet size at the start
    for (let i = 0; i < trail3Count; i++) {
      const alpha = 1 - i / trail3Count; // Fades out along the trail
      trail3Colors[i * 3] = 0.23; // Red channel
      trail3Colors[i * 3 + 1] = 0.57; // Green channel
      trail3Colors[i * 3 + 2] = 0.8 * alpha; // Blue channel with fade
    }

    const trail3Geometry = new THREE.BufferGeometry();
    trail3Geometry.setAttribute('position', new THREE.BufferAttribute(trail3Positions, 3));
    trail3Geometry.setAttribute('color', new THREE.BufferAttribute(trail3Colors, 3));

    const trail3Material = new THREE.PointsMaterial({
      size: 0.2, // Maximum size
      vertexColors: true, // Use per-vertex colors
      transparent: true,
      opacity: 0.8,
    });

    const trail3 = new THREE.Points(trail3Geometry, trail3Material);
    tiltedOrbit2.add(trail3);

    // Camera position
    camera.position.z = 10;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableZoom = false;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update Planet 1
      angle1 += 0.01;
      const x1 = planet1OrbitRadius * Math.cos(angle1);
      const z1 = planet1OrbitRadius * Math.sin(angle1);
      planet1.position.set(x1, 0, z1);

      // Update Trail 1
      for (let i = trail1Positions.length - 3; i > 0; i -= 3) {
        trail1Positions[i] = trail1Positions[i - 3];
        trail1Positions[i + 1] = trail1Positions[i - 2];
        trail1Positions[i + 2] = trail1Positions[i - 1];
      }
      trail1Positions[0] = x1;
      trail1Positions[1] = 0;
      trail1Positions[2] = z1;

      // Gradually shrink sizes for the trail effect
      for (let i = trail1Sizes.length - 1; i > 0; i--) {
        trail1Sizes[i] = trail1Sizes[i - 1] * 0.95; // Shrinks previous size
      }
      trail1Sizes[0] = 0.5; // Reset size for the new point to match planet size

      trail1Geometry.attributes.position.needsUpdate = true;

      // Update Planet 2
      angle2 -= 0.01;
      const x2 = planet2OrbitRadius * Math.cos(angle2);
      const z2 = planet2OrbitRadius * Math.sin(angle2);
      planet2.position.set(x2, 0, z2);

      // Update Trail 2
      for (let i = trail2Points.length - 3; i > 0; i -= 3) {
        trail2Points[i] = trail2Points[i - 3];
        trail2Points[i + 1] = trail2Points[i - 2];
        trail2Points[i + 2] = trail2Points[i - 1];
      }
      trail2Points[0] = x2;
      trail2Points[1] = 0;
      trail2Points[2] = z2;
      trail2Geometry.attributes.position.needsUpdate = true;

      // Update Planet 3
      angle3 -= 0.01;
      const x3 = planet3OrbitRadius * Math.cos(angle3);
      const z3 = planet3OrbitRadius * Math.sin(angle3);
      planet3.position.set(x3, 0, z3);

      // Update Trail 3
      for (let i = trail3Positions.length - 3; i > 0; i -= 3) {
        trail3Positions[i] = trail3Positions[i - 3];
        trail3Positions[i + 1] = trail3Positions[i - 2];
        trail3Positions[i + 2] = trail3Positions[i - 1];
      }
      trail3Positions[0] = x3;
      trail3Positions[1] = 0;
      trail3Positions[2] = z3;

      // Gradually shrink sizes for the trail effect
      for (let i = trail3Sizes.length - 1; i > 0; i--) {
        trail3Sizes[i] = trail3Sizes[i - 1] * 0.95; // Shrinks previous size
      }
      trail3Sizes[0] = 0.5; // Reset size for the new point to match planet size

      trail3Geometry.attributes.position.needsUpdate = true;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default SolarSystem;
