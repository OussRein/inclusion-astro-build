import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const strategyimage = 'https://inclusion.dz/wp-content/uploads/2024/06/strategy-and-consulting.jpg';
const designImage = 'https://inclusion.dz/wp-content/uploads/2024/06/branding-and-design.png';
const devImage = 'https://inclusion.dz/wp-content/uploads/2024/06/development-and-technology.png';
const digitalImage = 'https://inclusion.dz/wp-content/uploads/2024/06/digital-marketing.png';

export const services = {
  fr: [
    {
      title: 'Stratégie et Consulting',
      callToAction: 'Prenez des décisions stratégiques avec notre expertise!',
      catchPhrase: "Guidés par l'innovation, conduits par la stratégie.",
      description:
        'Notre équipe de consultants développe des stratégies complètes pour vous aider à atteindre vos objectifs commerciaux et à rester compétitif.',
      href: getPermalink('/services/strategy-and-consulting'),
      image: strategyimage,
      services: [
        {
          title: 'Stratégie Digitale',
          callToAction: "Boostez votre présence en ligne dès aujourd'hui!",
          catchPhrase: 'Optimisez votre digital, maximisez vos résultats.',
          description:
            "Nous élaborons des stratégies digitales complètes pour renforcer votre présence en ligne, incluant l'analyse de marché, l'identification des opportunités et la mise en œuvre de plans alignés avec vos objectifs commerciaux.",
          href: getPermalink('/services/strategy-and-consulting/digital-strategy'),
          image: 'https://inclusion.dz/wp-content/uploads/2024/06/digital-strategy.png',
        },
        {
          title: 'Stratégie de Marque',
          callToAction: 'Construisez une marque mémorable avec nous!',
          catchPhrase: 'Faites résonner votre identité de marque.',
          description:
            'Nous développons des identités de marque uniques qui résonnent avec votre audience, définissant clairement votre positionnement, vos valeurs et votre promesse de marque.',
          href: getPermalink('/services/strategy-and-consulting/brand-strategy'),
        },
        {
          title: 'Transformation Digitale',
          callToAction: 'Adoptez les innovations technologiques maintenant!',
          catchPhrase: "Transformez aujourd'hui pour un avenir digital.",
          description:
            'Nous guidons les entreprises à travers les changements technologiques, en les aidant à adopter des technologies innovantes et à optimiser leurs processus internes.',
          href: getPermalink('/services/strategy-and-consulting/digital-transformation'),
        },
        {
          title: 'Transformation Organisationnelle',
          callToAction: 'Optimisez vos processus internes avec notre expertise!',
          catchPhrase: "Réinventez votre organisation pour plus d'efficacité.",
          description:
            'Nous assistons les entreprises dans la transformation et la restructuration organisationnelle, optimisant les processus RH et intégrant des technologies de gestion avancées.',
          href: getPermalink('/services/strategy-and-consulting/organizational-transformation'),
        },
        {
          title: 'Gestion de Projet',
          callToAction: 'Assurez le succès de vos projets avec notre gestion experte!',
          catchPhrase: 'Gérez vos projets, atteignez vos objectifs.',
          description:
            "Nous gérons et suivons l'ensemble des projets pour aligner les ressources et les priorités avec les objectifs stratégiques, évaluant les risques potentiels et assurant la continuité des opérations.",
          href: getPermalink('/services/strategy-and-consulting/project-management'),
        },
      ],
    },
    {
      title: 'Développement et Technologie',
      callToAction: 'Transformez vos idées en solutions technologiques performantes!',
      catchPhrase: "Innover aujourd'hui pour le succès de demain.",
      description:
        'Notre équipe conçoit et développe des solutions technologiques évolutives et sécurisées adaptées à vos besoins spécifiques.',
      href: getPermalink('/services/development-and-technology'),
      image: devImage,
      services: [
        {
          title: 'Architecture des Solutions',
          callToAction: 'Construisez des infrastructures IT robustes avec nous!',
          catchPhrase: 'Solutions technologiques sur mesure, croissance assurée.',
          description:
            'Nous concevons des solutions technologiques évolutives et sécurisées adaptées à vos besoins spécifiques.',
          href: getPermalink('/services/development-and-technology/solution-architecture'),
        },
        {
          title: 'Développement de Sites Web',
          callToAction: 'Créez un site web qui se démarque!',
          catchPhrase: 'Des sites web dynamiques pour une expérience unique.',
          description:
            "Nous créons des sites web réactifs et dynamiques qui attirent l'attention et offrent une expérience utilisateur exceptionnelle.",
          href: getPermalink('/services/development-and-technology/website-development'),
        },
        {
          title: "Développement d'Applications",
          callToAction: 'Transformez vos idées en applications performantes!',
          catchPhrase: 'Applications sur mesure pour une efficacité maximale.',
          description:
            "Nous développons des applications mobiles et web conviviales, adaptées à vos besoins spécifiques, améliorant l'interaction client et l'efficacité opérationnelle.",
          href: getPermalink('/services/development-and-technology/app-development'),
        },
        {
          title: 'Digitalisation',
          callToAction: "Lancez votre plateforme e-commerce aujourd'hui!",
          catchPhrase: "Expérience d'achat fluide et sécurisée.",
          description:
            "Nous construisons des plateformes de commerce électronique complètes offrant une expérience d'achat fluide et sécurisée, avec des fonctionnalités avancées pour gérer les transactions, le suivi des commandes et l'analyse des données de vente.",
          href: getPermalink('/services/development-and-technology/digitalization'),
        },
        {
          title: 'Creation des ERP et CMS',
          callToAction: 'Simplifiez la gestion de votre contenu digital!',
          catchPhrase: 'CMS et ERP pour une gestion sans tracas.',
          description:
            'Nous mettons en œuvre et gérons des systèmes CMS pour faciliter la création, la gestion et la publication de contenu digital.',
          href: getPermalink('/services/development-and-technology/erp-cms-creation'),
        },
      ],
    },
    {
      title: 'Marketing Digital',
      callToAction: 'Amplifiez votre impact en ligne avec nos stratégies de marketing digital!',
      catchPhrase: 'Connectez, engagez, convertissez.',
      description:
        'Notre équipe développe et met en œuvre des stratégies de marketing efficaces pour augmenter votre visibilité et engager votre audience.',
      href: getPermalink('/services/digital-marketing'),
      image: digitalImage,
      services: [
        {
          title: 'Stratégie de Marketing',
          callToAction: 'Augmentez votre visibilité avec une stratégie sur mesure!',
          catchPhrase: 'Marketing stratégique pour des résultats mesurables.',
          description:
            'Nous élaborons des plans de marketing efficaces pour augmenter votre visibilité et engager votre audience.',
          href: getPermalink('/services/digital-marketing/marketing-strategy'),
        },
        {
          title: 'Marketing sur les Réseaux Sociaux',
          callToAction: 'Renforcez votre présence sur les réseaux sociaux maintenant!',
          catchPhrase: 'Engagez et développez votre audience sociale.',
          description:
            "Nous gérons vos comptes de réseaux sociaux pour développer votre audience et renforcer l'engagement.",
          href: getPermalink('/services/digital-marketing/social-media-marketing'),
        },
        {
          title: 'Marketing de Contenu',
          callToAction: "Créez du contenu qui capte et retient l'attention!",
          catchPhrase: 'Contenu pertinent pour un engagement maximal.',
          description: 'Nous créons du contenu engageant et pertinent pour attirer et retenir votre audience.',
          href: getPermalink('/services/digital-marketing/content-marketing'),
        },
        {
          title: "Marketing d'Influence",
          callToAction: 'Collaborez avec des influenceurs et élargissez votre portée!',
          catchPhrase: 'Influencez votre marché avec les bonnes voix.',
          description:
            'Nous identifions et collaborons avec des influenceurs pertinents pour promouvoir votre produit ou service.',
          href: getPermalink('/services/digital-marketing/influencer-marketing'),
        },
        {
          title: 'Veille Technologique',
          callToAction: "Restez à la pointe de l'innovation technologique!",
          catchPhrase: 'Anticipez les tendances, saisissez les opportunités.',
          description:
            "Nous surveillons continuellement les tendances du marché pour identifier les opportunités d'innovation et fournir des rapports réguliers sur les évolutions technologiques pertinentes.",
          href: getPermalink('/services/digital-marketing/technology-watch'),
        },
        {
          title: 'Publicité Payante',
          callToAction: 'Maximisez votre ROI avec des campagnes publicitaires ciblées!',
          catchPhrase: 'Publicité efficace pour un impact direct.',
          description: 'Nous gérons les campagnes de publicité payante pour maximiser votre retour sur investissement.',
          href: getPermalink('/services/digital-marketing/paid-advertising'),
        },
      ],
    },
    {
      title: 'Branding et Design',
      callToAction: 'Façonnez une identité visuelle unique et mémorable avec nous!',
      catchPhrase: 'Design distinctif, branding inoubliable.',
      description:
        'Notre équipe crée des identités de marque cohérentes et reconnaissables qui communiquent efficacement votre positionnement.',
      href: getPermalink('/services/branding-and-design'),
      image: designImage,
      services: [
        {
          title: 'Identité visuelle',
          callToAction: 'Développez une identité de marque forte et cohérente!',
          catchPhrase: "Une image de marque qui parle d'elle-même.",
          description:
            'Nous développons des éléments visuels et des messages qui communiquent efficacement votre positionnement de marque.',
          href: getPermalink('/services/branding-and-design/visual-identity'),
        },
        {
          title: 'Supports de Marque',
          callToAction: 'Renforcez votre marque avec des supports de qualité!',
          catchPhrase: 'Supports de marque pour une présence consolidée.',
          description:
            'Nous concevons des matériaux de soutien pour renforcer votre marque, que ce soit des cartes de visite, des brochures ou des supports numériques.',
          href: getPermalink('/services/branding-and-design/brand-collateral'),
        },
        {
          title: 'Conception de Logo',
          callToAction: 'Créez un logo qui définit votre marque!',
          catchPhrase: 'Des logos mémorables pour des marques inoubliables.',
          description:
            'Nos designers travaillent avec vous pour créer une identité visuelle qui représente parfaitement votre entreprise.',
          href: getPermalink('/services/branding-and-design/logo-design'),
        },
        {
          title: 'Design de Sites Web et applications',
          callToAction: 'Développez des sites web et applications esthétiques et fonctionnels!',
          catchPhrase: 'Design attractif pour une expérience utilisateur exceptionnelle.',
          description:
            "Nous créons des sites web et des applications qui offrent une expérience utilisateur exceptionnelle, en se concentrant sur l'ergonomie et l'attrait visuel.",
          href: getPermalink('/services/branding-and-design/web-and-app-design'),
        },
        {
          title: 'Expérience Utilisateur (UX)',
          callToAction: "Optimisez l'UX de vos plateformes digitales!",
          catchPhrase: 'Expériences intuitives pour une satisfaction maximale.',
          description:
            'Nous structurons le contenu pour une expérience utilisateur optimale, garantissant que vos plateformes digitales soient intuitives et faciles à naviguer.',
          href: getPermalink('/services/branding-and-design/user-experience'),
        },
      ],
    },
    {
      title: 'Production audiovisuelle et cinématographie',
      callToAction: 'Découvrez notre expertise',
      catchPhrase: 'Transformez vos idées en images captivantes',
      description: 'Nous offrons une gamme complète de services en production audiovisuelle et cinématographique pour donner vie à vos projets. De la gestion de projet à la réalisation de films, documentaires, et captations live, nous vous accompagnons à chaque étape.',
      href: getPermalink('/services/production-audiovisuelle-et-cinimatographie'),
      image: designImage,
      services: [
        {
          title: 'Gestion de projet audiovisuel et cinématographique',
          callToAction: 'En savoir plus',
          catchPhrase: 'Planifiez, produisez et réussissez',
          description: 'De la conception à la post-production, nous gérons tous les aspects de votre projet audiovisuel pour garantir un résultat de qualité supérieure.',
          href: getPermalink('/services/production-audiovisuelle-et-cinimatographie/gestion-de-projet-audiovisuel-et-cinématographique'),
        },
        {
          title: 'Films',
          callToAction: 'Découvrez nos films',
          catchPhrase: 'Racontez votre histoire à travers l’art du cinéma',
          description: 'Nos experts réalisent des films qui captivent, inspirent et laissent une impression durable sur votre public.',
          href: getPermalink('/services/production-audiovisuelle-et-cinimatographie/films'),
        },
        {
          title: 'Documentaires',
          callToAction: 'Explorez nos documentaires',
          catchPhrase: 'Informez, éduquez et inspirez à travers des récits authentiques',
          description: 'Nous créons des documentaires qui explorent des sujets profonds, avec un regard unique et une narration engageante.',
          href: getPermalink('/services/production-audiovisuelle-et-cinimatographie/documentaires'),
        },
        {
          title: 'Événementiel et captation live',
          callToAction: 'Découvrez nos services live',
          catchPhrase: 'Immortalisez vos événements avec une captation professionnelle',
          description: 'Nous couvrons vos événements en direct, capturant chaque moment avec une qualité audiovisuelle exceptionnelle.',
          href: getPermalink('/services/production-audiovisuelle-et-cinimatographie/evenementiel-et-captation-live'),
        },
        {
          title: 'Shooting photo et vidéo',
          callToAction: 'Réservez votre séance',
          catchPhrase: 'Capturez l’essence de vos moments avec style',
          description: 'Nos services de shooting photo et vidéo sont conçus pour mettre en valeur votre vision, qu’il s’agisse de portraits, de publicités, ou de contenus créatifs.',
          href: getPermalink('/services/production-audiovisuelle-et-cinimatographie/shooting-photo-et-video'),
        },
      ],
    },
    
  ],
  en: [
    {
      title: 'Strategy and Consulting',
      callToAction: 'Make strategic decisions with our expertise!',
      catchPhrase: 'Guided by innovation, driven by strategy.',
      description:
        'Our team of consultants develops comprehensive strategies to help you achieve your business goals and stay competitive.',
      href: getPermalink('/services/strategy-and-consulting'),
      services: [
        {
          title: 'Digital Strategy',
          callToAction: 'Boost your online presence today!',
          catchPhrase: 'Optimize your digital, maximize your results.',
          description:
            'We develop comprehensive digital strategies to enhance your online presence, including market analysis, opportunity identification, and plan implementation aligned with your business goals.',
          href: getPermalink('/services/strategy-and-consulting/digital-strategy'),
        },
        {
          title: 'Brand Strategy',
          callToAction: 'Build a memorable brand with us!',
          catchPhrase: 'Make your brand identity resonate.',
          description:
            'We create unique brand identities that resonate with your audience, clearly defining your positioning, values, and brand promise.',
          href: getPermalink('/services/strategy-and-consulting/brand-strategy'),
        },
        {
          title: 'Digital Transformation',
          callToAction: 'Embrace technological innovations now!',
          catchPhrase: 'Transform today for a digital tomorrow.',
          description:
            'We guide companies through technological changes, helping them adopt innovative technologies and optimize internal processes.',
          href: getPermalink('/services/strategy-and-consulting/digital-transformation'),
        },
        {
          title: 'Organizational Transformation',
          callToAction: 'Optimize your internal processes with our expertise!',
          catchPhrase: 'Reinvent your organization for greater efficiency.',
          description:
            'We assist companies in organizational transformation and restructuring, optimizing HR processes and integrating advanced management technologies.',
          href: getPermalink('/services/strategy-and-consulting/organizational-transformation'),
        },
        {
          title: 'Project Management',
          callToAction: 'Ensure project success with our expert management!',
          catchPhrase: 'Manage your projects, achieve your goals.',
          description:
            'We manage and monitor all projects to align resources and priorities with strategic goals, assessing potential risks and ensuring operational continuity.',
          href: getPermalink('/services/strategy-and-consulting/project-management'),
        },
      ],
    },
    {
      title: 'Development and Technology',
      callToAction: 'Turn your ideas into high-performing technology solutions!',
      catchPhrase: "Innovate today for tomorrow's success.",
      description:
        'Our team designs and develops scalable and secure technology solutions tailored to your specific needs.',
      href: getPermalink('/services/development-and-technology'),
      services: [
        {
          title: 'Solution Architecture',
          callToAction: 'Build robust IT infrastructures with us!',
          catchPhrase: 'Custom tech solutions, assured growth.',
          description: 'We design scalable and secure technology solutions tailored to your specific needs.',
          href: getPermalink('/services/development-and-technology/solution-architecture'),
        },
        {
          title: 'Website Development',
          callToAction: 'Create a standout website!',
          catchPhrase: 'Dynamic websites for a unique experience.',
          description:
            'We create responsive and dynamic websites that attract attention and provide an exceptional user experience.',
          href: getPermalink('/services/development-and-technology/website-development'),
        },
        {
          title: 'App Development',
          callToAction: 'Turn your ideas into high-performing applications!',
          catchPhrase: 'Custom applications for maximum efficiency.',
          description:
            'We develop user-friendly mobile and web applications tailored to your specific needs, enhancing customer interaction and operational efficiency.',
          href: getPermalink('/services/development-and-technology/app-development'),
        },
        {
          title: 'Digitalization',
          callToAction: 'Launch your e-commerce platform today!',
          catchPhrase: 'Seamless and secure shopping experience.',
          description:
            'We build comprehensive e-commerce platforms offering a seamless and secure shopping experience with advanced features for managing transactions, order tracking, and sales data analysis.',
          href: getPermalink('/services/development-and-technology/digitalization'),
        },
        {
          title: 'ERP and CMS Creation',
          callToAction: 'Simplify your digital content management!',
          catchPhrase: 'CMS and ERP for hassle-free management.',
          description:
            'We implement and manage CMS systems to facilitate the creation, management, and publication of digital content.',
          href: getPermalink('/services/development-and-technology/erp-cms-creation'),
        },
      ],
    },
    {
      title: 'Digital Marketing',
      callToAction: 'Amplify your online impact with our digital marketing strategies!',
      catchPhrase: 'Connect, engage, convert.',
      description:
        'Our team develops and implements effective marketing strategies to increase your visibility and engage your audience.',
      href: getPermalink('/services/digital-marketing'),
      services: [
        {
          title: 'Marketing Strategy',
          callToAction: 'Increase your visibility with a tailored strategy!',
          catchPhrase: 'Strategic marketing for measurable results.',
          description: 'We develop effective marketing plans to increase your visibility and engage your audience.',
          href: getPermalink('/services/digital-marketing/marketing-strategy'),
        },
        {
          title: 'Social Media Marketing',
          callToAction: 'Strengthen your social media presence now!',
          catchPhrase: 'Engage and grow your social audience.',
          description: 'We manage your social media accounts to grow your audience and strengthen engagement.',
          href: getPermalink('/services/digital-marketing/social-media-marketing'),
        },
        {
          title: 'Content Marketing',
          callToAction: 'Create content that captures and retains attention!',
          catchPhrase: 'Relevant content for maximum engagement.',
          description: 'We create engaging and relevant content to attract and retain your audience.',
          href: getPermalink('/services/digital-marketing/content-marketing'),
        },
        {
          title: 'Influencer Marketing',
          callToAction: 'Collaborate with influencers and expand your reach!',
          catchPhrase: 'Influence your market with the right voices.',
          description: 'We identify and collaborate with relevant influencers to promote your product or service.',
          href: getPermalink('/services/digital-marketing/influencer-marketing'),
        },
        {
          title: 'Technology Watch',
          callToAction: 'Stay at the forefront of technological innovation!',
          catchPhrase: 'Anticipate trends, seize opportunities.',
          description:
            'We continuously monitor market trends to identify innovation opportunities and provide regular reports on relevant technological developments.',
          href: getPermalink('/services/digital-marketing/technology-watch'),
        },
        {
          title: 'Paid Advertising',
          callToAction: 'Maximize your ROI with targeted advertising campaigns!',
          catchPhrase: 'Effective advertising for direct impact.',
          description: 'We manage paid advertising campaigns to maximize your return on investment.',
          href: getPermalink('/services/digital-marketing/paid-advertising'),
        },
      ],
    },
    {
      title: 'Branding and Design',
      callToAction: 'Shape a unique and memorable visual identity with us!',
      catchPhrase: 'Distinctive design, unforgettable branding.',
      description:
        'Our team creates coherent and recognizable brand identities that effectively communicate your positioning.',
      href: getPermalink('/services/branding-and-design'),
      services: [
        {
          title: 'Visual Identity',
          callToAction: 'Develop a strong and coherent brand identity!',
          catchPhrase: 'A brand image that speaks for itself.',
          description: 'We develop visual elements and messages that effectively communicate your brand positioning.',
          href: getPermalink('/services/branding-and-design/visual-identity'),
        },
        {
          title: 'Brand Collateral',
          callToAction: 'Strengthen your brand with quality collateral!',
          catchPhrase: 'Brand collateral for a consolidated presence.',
          description:
            'We design support materials to strengthen your brand, whether business cards, brochures, or digital media.',
          href: getPermalink('/services/branding-and-design/brand-collateral'),
        },
        {
          title: 'Logo Design',
          callToAction: 'Create a logo that defines your brand!',
          catchPhrase: 'Memorable logos for unforgettable brands.',
          description:
            'Our designers work with you to create a visual identity that perfectly represents your business.',
          href: getPermalink('/services/branding-and-design/logo-design'),
        },
        {
          title: 'Web and App Design',
          callToAction: 'Develop aesthetically pleasing and functional websites and applications!',
          catchPhrase: 'Attractive design for an exceptional user experience.',
          description:
            'We create websites and applications that offer an exceptional user experience, focusing on ergonomics and visual appeal.',
          href: getPermalink('/services/branding-and-design/web-and-app-design'),
        },
        {
          title: 'User Experience (UX)',
          callToAction: 'Optimize the UX of your digital platforms!',
          catchPhrase: 'Intuitive experiences for maximum satisfaction.',
          description:
            'We structure content for optimal user experience, ensuring your digital platforms are intuitive and easy to navigate.',
          href: getPermalink('/services/branding-and-design/user-experience'),
        },
      ],
    },
    {
      title: 'Audiovisual Production and Cinematography',
      callToAction: 'Discover our expertise',
      catchPhrase: 'Transform your ideas into captivating visuals',
      description: 'We offer a full range of audiovisual and cinematography production services to bring your projects to life. From project management to the creation of films, documentaries, and live events, we support you at every step.',
      href: getPermalink('/services/audiovisual-production-and-cinematography'),
      image: designImage,
      services: [
        {
          title: 'Audiovisual and Cinematographic Project Management',
          callToAction: 'Learn more',
          catchPhrase: 'Plan, produce, and succeed',
          description: 'From conception to post-production, we manage all aspects of your audiovisual project to ensure a superior result.',
          href: getPermalink('/services/audiovisual-production-and-cinematography/project-management'),
        },
        {
          title: 'Films',
          callToAction: 'Discover our films',
          catchPhrase: 'Tell your story through the art of cinema',
          description: 'Our experts create films that captivate, inspire, and leave a lasting impression on your audience.',
          href: getPermalink('/services/audiovisual-production-and-cinematography/films'),
        },
        {
          title: 'Documentaries',
          callToAction: 'Explore our documentaries',
          catchPhrase: 'Inform, educate, and inspire through authentic storytelling',
          description: 'We create documentaries that explore deep subjects with a unique perspective and engaging narrative.',
          href: getPermalink('/services/audiovisual-production-and-cinematography/documentaries'),
        },
        {
          title: 'Event Coverage and Live Recording',
          callToAction: 'Discover our live services',
          catchPhrase: 'Capture your events with professional quality',
          description: 'We cover your events live, capturing every moment with exceptional audiovisual quality.',
          href: getPermalink('/services/audiovisual-production-and-cinematography/event-coverage-and-live-recording'),
        },
        {
          title: 'Photo and Video Shooting',
          callToAction: 'Book your session',
          catchPhrase: 'Capture the essence of your moments in style',
          description: 'Our photo and video shooting services are designed to highlight your vision, whether it’s portraits, advertisements, or creative content.',
          href: getPermalink('/services/audiovisual-production-and-cinematography/photo-and-video-shooting'),
        },
      ],
    },    
  ],
  ar: [
    {
      title: 'استراتيجية واستشارات',
      callToAction: 'اتخذ قرارات استراتيجية مع خبرتنا!',
      catchPhrase: 'توجيه الابتكار، مدفوعة بالاستراتيجية.',
      description: 'يقوم فريقنا من المستشارين بتطوير استراتيجيات شاملة لمساعدتك في تحقيق أهداف عملك والبقاء تنافسياً.',
      href: getPermalink('/services/strategy-and-consulting'),
      services: [
        {
          title: 'استراتيجية رقمية',
          callToAction: 'عزز وجودك على الإنترنت اليوم!',
          catchPhrase: 'تحسين الرقمية الخاصة بك، زيادة النتائج.',
          description:
            'نقوم بتطوير استراتيجيات رقمية شاملة لتعزيز وجودك على الإنترنت، بما في ذلك تحليل السوق، تحديد الفرص، وتنفيذ الخطط المتوافقة مع أهداف عملك.',
          href: getPermalink('/services/strategy-and-consulting/digital-strategy'),
        },
        {
          title: 'استراتيجية العلامة التجارية',
          callToAction: 'بناء علامة تجارية لا تنسى معنا!',
          catchPhrase: 'اجعل هوية علامتك التجارية تتردد.',
          description:
            'نحن نخلق هويات علامة تجارية فريدة تتردد مع جمهورك، تحديد بوضوح موقعك، قيمك، ووعد علامتك التجارية.',
          href: getPermalink('/services/strategy-and-consulting/brand-strategy'),
        },
        {
          title: 'التحول الرقمي',
          callToAction: 'احتضان الابتكارات التكنولوجية الآن!',
          catchPhrase: 'تحول اليوم لمستقبل رقمي.',
          description:
            'نوجه الشركات خلال التغيرات التكنولوجية، مساعدتهم على اعتماد التقنيات المبتكرة وتحسين العمليات الداخلية.',
          href: getPermalink('/services/strategy-and-consulting/digital-transformation'),
        },
        {
          title: 'التحول التنظيمي',
          callToAction: 'قم بتحسين عملياتك الداخلية بخبرتنا!',
          catchPhrase: 'إعادة ابتكار تنظيمك من أجل كفاءة أكبر.',
          description:
            'نساعد الشركات في التحول التنظيمي وإعادة الهيكلة، تحسين عمليات الموارد البشرية ودمج تقنيات الإدارة المتقدمة.',
          href: getPermalink('/services/strategy-and-consulting/organizational-transformation'),
        },
        {
          title: 'إدارة المشاريع',
          callToAction: 'ضمن نجاح مشاريعك مع إدارتنا الخبراء!',
          catchPhrase: 'إدارة مشاريعك، تحقيق أهدافك.',
          description:
            'نقوم بإدارة ومراقبة جميع المشاريع لمحاذاة الموارد والأولويات مع الأهداف الاستراتيجية، تقييم المخاطر المحتملة وضمان استمرارية العمليات.',
          href: getPermalink('/services/strategy-and-consulting/project-management'),
        },
      ],
    },
    {
      title: 'التطوير والتكنولوجيا',
      callToAction: 'حوّل أفكارك إلى حلول تكنولوجية عالية الأداء!',
      catchPhrase: 'ابتكار اليوم من أجل نجاح الغد.',
      description: 'يقوم فريقنا بتصميم وتطوير حلول تكنولوجية قابلة للتطوير وآمنة تتناسب مع احتياجاتك الخاصة.',
      href: getPermalink('/services/development-and-technology'),
      services: [
        {
          title: 'هندسة الحلول',
          callToAction: 'ابني بنى تحتية لتقنية المعلومات قوية معنا!',
          catchPhrase: 'حلول تكنولوجية مخصصة، نمو مضمون.',
          description: 'نحن نصمم حلول تكنولوجية قابلة للتطوير وآمنة تتناسب مع احتياجاتك الخاصة.',
          href: getPermalink('/services/development-and-technology/solution-architecture'),
        },
        {
          title: 'تطوير المواقع الإلكترونية',
          callToAction: 'أنشئ موقعًا إلكترونيًا مميزًا!',
          catchPhrase: 'مواقع ديناميكية لتجربة فريدة.',
          description: 'نحن نصمم مواقع إلكترونية تفاعلية وديناميكية تجذب الانتباه وتوفر تجربة مستخدم استثنائية.',
          href: getPermalink('/services/development-and-technology/website-development'),
        },
        {
          title: 'تطوير التطبيقات',
          callToAction: 'حوّل أفكارك إلى تطبيقات عالية الأداء!',
          catchPhrase: 'تطبيقات مخصصة لأقصى كفاءة.',
          description:
            'نحن نطور تطبيقات موبايل وويب سهلة الاستخدام تتناسب مع احتياجاتك الخاصة، تعزيز التفاعل مع العملاء وكفاءة العمليات.',
          href: getPermalink('/services/development-and-technology/app-development'),
        },
        {
          title: 'الرقمنة',
          callToAction: 'أطلق منصتك التجارية اليوم!',
          catchPhrase: 'تجربة تسوق سلسة وآمنة.',
          description:
            'نبني منصات تجارة إلكترونية شاملة توفر تجربة تسوق سلسة وآمنة، مع ميزات متقدمة لإدارة المعاملات، تتبع الطلبات وتحليل بيانات المبيعات.',
          href: getPermalink('/services/development-and-technology/digitalization'),
        },
        {
          title: 'إنشاء ERP و CMS',
          callToAction: 'بسّط إدارة المحتوى الرقمي الخاص بك!',
          catchPhrase: 'CMS و ERP لإدارة سهلة.',
          description: 'نقوم بتنفيذ وإدارة أنظمة CMS لتسهيل إنشاء، إدارة، ونشر المحتوى الرقمي.',
          href: getPermalink('/services/development-and-technology/erp-cms-creation'),
        },
      ],
    },
    {
      title: 'التسويق الرقمي',
      callToAction: 'طور خطط تسويقية فعّالة لزيادة رؤيتك وجذب جمهورك!',
      catchPhrase: 'نحن هنا لمساعدتك في تحقيق أهدافك التجارية عبر الإنترنت.',
      description:
        'نحن نحلل أهدافك التجارية وسوقك المستهدف لإنشاء حملات تسويقية تولد نتائج قابلة للقياس وتعزز من تفاعل جمهورك.',
      href: getPermalink('/services/digital-marketing'),
      services: [
        {
          title: 'استراتيجية التسويق',
          callToAction: 'طور خطط تسويقية فعّالة!',
          catchPhrase: 'تحليل أهدافك التجارية، وسوقك المستهدف لإنشاء حملات تسويقية تولد نتائج قابلة للقياس.',
          description:
            'نحلل أهدافك التجارية وسوقك المستهدف لإنشاء حملات تسويقية تولد نتائج قابلة للقياس وتعزز من تفاعل جمهورك.',
          href: getPermalink('/services/digital-marketing/marketing-strategy'),
        },
        {
          title: 'التسويق عبر وسائل التواصل الاجتماعي',
          callToAction: 'زيادة حضور علامتك التجارية على منصات التواصل الاجتماعي!',
          catchPhrase: 'نمو حضور علامتك التجارية بأستخدام استراتيجيات مثبتة.',
          description: 'ندير حساباتك على منصات الوسائط الاجتماعية لتطوير جمهورك وتعزيز التفاعل معه.',
          href: getPermalink('/services/digital-marketing/social-media-marketing'),
        },
        {
          title: 'تسويق المحتوى',
          callToAction: 'إنشاء محتوى يجذب ويحتفظ بجمهورك!',
          catchPhrase: 'إنشاء محتوى يجذب ويحتفظ بجمهورك.',
          description:
            'نقوم بإعداد محتوى جذاب وملائم لجذب والاحتفاظ بجمهورك، ونطور استراتيجيات تسويق المحتوى تواكب اهتمامات عملائك.',
          href: getPermalink('/services/digital-marketing/content-marketing'),
        },
        {
          title: 'التسويق بالتأثير',
          callToAction: 'استخدام المؤثرين لزيادة نطاقك وتعزيز مصداقية علامتك التجارية!',
          catchPhrase: 'استخدام المؤثرين لزيادة نطاقك وتعزيز مصداقية علامتك التجارية.',
          description: 'نحدد ونتعاون مع المؤثرين ذوي الصلة للترويج لمنتجاتك أو خدماتك وتعزيز مكانتك في السوق.',
          href: getPermalink('/services/digital-marketing/influencer-marketing'),
        },
        {
          title: 'المراقبة التكنولوجية',
          callToAction: 'متابعة مستمرة للاتجاهات والسوق لتحديد الفرص للابتكار.',
          catchPhrase: 'التحديثات التكنولوجية المستمرة ذات الصلة بقطاع نشاطك.',
          description:
            'نقدم تقارير دورية عن التطورات التكنولوجية ذات الصلة بقطاع نشاطك لتحديد الفرص للابتكار والتحسين المستمر.',
          href: getPermalink('/services/digital-marketing/technology-watch'),
        },
        {
          title: 'الإعلان المدفوع',
          callToAction: 'إدارة حملات الإعلان المدفوع لتحقيق أقصى عائد على الاستثمار!',
          catchPhrase: 'إنشاء وتحسين الإعلانات على منصات متعددة للوصول بفعالية إلى جمهورك المستهدف.',
          description:
            'نقوم بإدارة حملات الإعلان المدفوع لتحقيق أقصى عائد على الاستثمار، بما في ذلك إنشاء وتحسين الإعلانات على منصات متعددة للوصول بفعالية إلى جمهورك المستهدف.',
          href: getPermalink('/services/digital-marketing/paid-advertising'),
        },
      ],
    },
    {
      title: 'العلامة التجارية والتصميم',
      callToAction: 'بناء هوية قوية تتجسد بأسلوبك ورسالتك.',
      catchPhrase: 'نحن هنا لجعل علامتك التجارية لا تُنسى.',
      description:
        'نقدم خدمات تصميم تشمل تطوير الهوية البصرية، والدعم الإبداعي، وتصميم الشعارات، وتصميم المواقع الإلكترونية والتطبيقات لتوفير تجربة مستخدم استثنائية.',
      href: getPermalink('/services/branding-and-design'),
      services: [
        {
          title: 'الهوية البصرية',
          callToAction: 'تحديد موقفك مع هوية بصرية متناغمة!',
          catchPhrase: 'تطوير عناصر بصرية ورسائل تواصل بشكل فعال مع جمهورك.',
          description: 'نقدم خدمات تطوير هوية بصرية تحدد بوضوح موقفك ورسالتك لبناء علامة قوية ومتميزة.',
          href: getPermalink('/services/branding-and-design/visual-identity'),
        },
        {
          title: 'الدعم الإبداعي',
          callToAction: 'التميز من خلال الإبداع والابتكار!',
          catchPhrase: 'تقديم أفكار إبداعية لتعزيز علامتك التجارية وجذب جمهور جديد.',
          description: 'نقدم حلولاً إبداعية تعزز من تواجدك الرقمي وتجذب انتباه جمهورك المستهدف.',
          href: getPermalink('/services/branding-and-design/creative-support'),
        },
        {
          title: 'تصميم الشعارات',
          callToAction: 'إنشاء شعار يعبر بوضوح عن هويتك!',
          catchPhrase: 'تصميم شعارات فريدة تميز علامتك التجارية عن المنافسين.',
          description: 'نقدم خدمات تصميم شعارات تعبر بوضوح عن هوية علامتك التجارية وتعزز من تميزك في السوق.',
          href: getPermalink('/services/branding-and-design/logo-design'),
        },
        {
          title: 'تصميم المواقع الإلكترونية والتطبيقات',
          callToAction: 'تصميم تجربة مستخدم استثنائية تعكس علامتك التجارية!',
          catchPhrase: 'تصميم وتطوير مواقع الويب والتطبيقات بتفاصيل تعبر عن هويتك.',
          description:
            'نقوم بتصميم وتطوير مواقع وتطبيقات الويب التي توفر تجربة مستخدم فريدة وتعبر بشكل واضح عن هوية علامتك التجارية.',
          href: getPermalink('/services/branding-and-design/website-and-app-design'),
        },
        {
          title: 'تصوير المنتجات',
          callToAction: 'عرض منتجاتك بأفضل طريقة ممكنة!',
          catchPhrase: 'تصوير منتجاتك بأفضل طريقة ممكنة لجذب عملائك.',
          description: 'نقدم خدمات تصوير المنتجات المهنية لتعزيز مبيعاتك وجذب انتباه العملاء بتصوير محترف وجذاب.',
          href: getPermalink('/services/branding-and-design/product-photography'),
        },
        {
          title: 'استشارات التصميم',
          callToAction: 'تحسين تجربة مستخدمك وتعزيز تفاعله مع منتجاتك.',
          catchPhrase: 'تصميم تجربة مستخدم مميزة تعكس قيم علامتك التجارية.',
          description:
            'نقدم استشارات في تصميم الواجهة وتجربة المستخدم لتحسين أداء موقعك أو تطبيقك وتعزيز تفاعل عملائك مع منتجاتك.',
          href: getPermalink('/services/branding-and-design/design-consulting'),
        },
      ],
    },
    {
      title: 'الإنتاج السمعي البصري والسينمائي',
      callToAction: 'اكتشف خبراتنا',
      catchPhrase: 'حوّل أفكارك إلى صور جذابة',
      description: 'نقدم مجموعة كاملة من خدمات الإنتاج السمعي البصري والسينمائي لإحياء مشاريعك. من إدارة المشاريع إلى إنتاج الأفلام، الوثائقيات، وتغطية الأحداث الحية، نحن ندعمك في كل خطوة.',
      href: getPermalink('/services/الإنتاج-السمعي-البصري-والسينمائي'),
      image: designImage,
      services: [
        {
          title: 'إدارة المشاريع السمعية البصرية والسينمائية',
          callToAction: 'تعرف على المزيد',
          catchPhrase: 'خطط، أنتج ونجح',
          description: 'من التصور إلى ما بعد الإنتاج، ندير جميع جوانب مشروعك السمعي البصري لضمان نتيجة ذات جودة عالية.',
          href: getPermalink('/services/الإنتاج-السمعي-البصري-والسينمائي/إدارة-المشاريع'),
        },
        {
          title: 'الأفلام',
          callToAction: 'اكتشف أفلامنا',
          catchPhrase: 'احكي قصتك من خلال فن السينما',
          description: 'يبتكر خبراؤنا أفلامًا تجذب، تلهم، وتترك انطباعًا دائمًا على جمهورك.',
          href: getPermalink('/services/الإنتاج-السمعي-البصري-والسينمائي/الأفلام'),
        },
        {
          title: 'الوثائقيات',
          callToAction: 'استكشف وثائقياتنا',
          catchPhrase: 'أبلغ، علم، وألهم من خلال سرد القصص الأصيل',
          description: 'ننتج وثائقيات تستكشف مواضيع عميقة برؤية فريدة وسرد مشوق.',
          href: getPermalink('/services/الإنتاج-السمعي-البصري-والسينمائي/الوثائقيات'),
        },
        {
          title: 'تغطية الأحداث والتصوير المباشر',
          callToAction: 'اكتشف خدماتنا المباشرة',
          catchPhrase: 'وثّق أحداثك بجودة احترافية',
          description: 'نقوم بتغطية أحداثك بشكل مباشر، نلتقط كل لحظة بجودة سمعية بصرية استثنائية.',
          href: getPermalink('/services/الإنتاج-السمعي-البصري-والسينمائي/تغطية-الأحداث-والتصوير-المباشر'),
        },
        {
          title: 'التصوير الفوتوغرافي والفيديو',
          callToAction: 'احجز جلستك',
          catchPhrase: 'التقط جوهر لحظاتك بأسلوب مميز',
          description: 'خدماتنا في التصوير الفوتوغرافي والفيديو مصممة لتبرز رؤيتك، سواء كانت بورتريهات، إعلانات، أو محتوى إبداعي.',
          href: getPermalink('/services/الإنتاج-السمعي-البصري-والسينمائي/التصوير-الفوتوغرافي-والفيديو'),
        },
      ],
    },    
  ],
};

export const headerData = {
  fr: {
    links: [
      {
        text: 'À propos',
        href: getPermalink('/about'),
      },
      {
        text: 'Services',
        href: getPermalink('/services'),
        links: services.fr,
      },
      {
        text: 'Blog',
        href: getBlogPermalink(),
      },
      {
        text: 'Contact',
        href: '/contact',
      },
    ],
  },
  en: {
    links: [
      {
        text: 'About us',
        href: getPermalink('/about'),
      },
      {
        text: 'Services',
        href: getPermalink('/en/services'),
        links: services.en,
      },
      {
        text: 'Blog',
        href: getBlogPermalink(),
      },
      {
        text: 'Contact',
        href: '/contact',
      },
    ],
  },
  ar: {
    links: [
      {
        text: 'من نحن',
        href: getPermalink('/ar/about'),
      },
      {
        text: 'خدماتنا',
        href: getPermalink('/ar/services'),
        links: services.ar,
      },
      {
        text: 'المدونة',
        href: getPermalink('/ar/blog'),
      },
      {
        text: 'تواصل معنا',
        href: '/ar/contact',
      },
    ],
  },
};

export const headerArticle = {
  fr: {
    title: 'C’EST QUOI LA TRANSFORMATION DIGITALE? POURQUOI EST-ELLE IMPORTANTE?',
    callToAction: 'En savoir plus',
    description:
      'Découvrez l’importance de la transformation digitale pour les entreprises modernes et comment elle peut améliorer leur efficacité et compétitivité.',
    href: getPermalink('/blog/cest-quoi-la-transformation-digitale'),
    image: 'https://inclusion.dz/wp-content/uploads/2022/11/TEMPLATE-INCLUSION-DIGITAL-MARKETING-14-1536x1097.jpg',
  },
  ar: {
    title: 'ما هو التحول الرقمي؟ ولماذا هو مهم؟',
    callToAction: 'اقرأ المزيد',
    description: 'اكتشف أهمية التحول الرقمي للشركات الحديثة وكيف يمكن أن يعزز من كفاءتها وقدرتها التنافسية.',
    href: getPermalink('/ar/blog/ما-هي-التحول-الرقمي-ولماذا-هو-مهم'),
    image: 'https://inclusion.dz/wp-content/uploads/2022/11/TEMPLATE-INCLUSION-DIGITAL-MARKETING-14-1536x1097.jpg',
  },
  en: {
    title: 'WHAT IS DIGITAL TRANSFORMATION? WHY IS IT IMPORTANT?',
    callToAction: 'Learn more',
    description:
      'Explore the importance of digital transformation for modern businesses and how it can enhance their efficiency and competitiveness.',
    href: getPermalink('/blog/branding-and-design/user-experience'),
    image: 'https://inclusion.dz/wp-content/uploads/2022/11/TEMPLATE-INCLUSION-DIGITAL-MARKETING-14-1536x1097.jpg',
  },
};

export const footerData = {
  fr: {
    links: services.fr,
    secondaryLinks: [
      { text: 'À propos', href: getPermalink('/about') },
      { text: 'Blog', href: getPermalink('/blog') },
      { text: 'Contacts', href: getPermalink('/contact') },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    ],
    footNote: `
    Made by Inclusion. All rights reserved.`,
  },
  ar: {
    links: services.ar,
    secondaryLinks: [
      { text: 'من نحن', href: getPermalink('/ar/about') },
      { text: 'المدونة', href: getPermalink('/ar/blog') },
      { text: 'تواصل معنا', href: getPermalink('/ar/contact') },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    ],
    footNote: `
    تم الإنشاء من قبل INCLUSION.`,
  },
  en: {
    links: services.en,
    secondaryLinks: [
      { text: 'About us', href: getPermalink('/about') },
      { text: 'Blog', href: getPermalink('/blog') },
      { text: 'Contacts', href: getPermalink('/contact') },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    ],
    footNote: `
    Made by Inclusion. All rights reserved.`,
  },
};
