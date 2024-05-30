import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const services = [
  {
    title: 'Strategy & Marketing',
    services: [
      {
        subtitle: 'Navigate the ever-evolving digital landscape with a roadmap for leveraging online channels to achieve your business goals.',
        title: 'Digital Strategy',
        href: getPermalink('/services/digital-strategy'),
      },
      {
        subtitle: 'Our data-driven marketing strategies help you reach your ideal customers, build brand awareness, and achieve marketing objectives.',
        title: 'Marketing & Communication',
        href: getPermalink('/services/marketing-communication'),
      },
      {
        subtitle: 'Engage your audience and build brand loyalty through targeted social media campaigns.',
        title: 'Social Media Marketing',
        href: getPermalink('/services/social-media-marketing'),
      },
      {
        subtitle: 'Create engaging and informative content that attracts and educates potential customers.',
        title: 'Content Marketing',
        href: getPermalink('/services/content-marketing'),
      },
      {
        subtitle: 'Gain valuable customer insights and competitor analysis to inform strategic planning and marketing decisions.',
        title: 'Market Research',
        href: getPermalink('/services/social-media-marketing'),
      },
      {
        subtitle: 'Reach your target audience and drive targeted traffic through paid advertising campaigns on search engines, social media, and other platforms.',
        title: 'Paid Media Advertising',
        href: getPermalink('/services/digital-intelligence'),
      },
    ],
  },
  {
    title: 'Development & Technology',
    services: [
      {
        title: 'Website Development',
        subtitle: 'Create a functional and engaging website that represents your brand and drives conversions.',
      },
      {
        title: 'App Development​',
        subtitle: 'Transform your business processes or provide value to customers with custom web and mobile applications.',
      },
      {
        title: 'Solutions Architecture​',
        subtitle: 'Our team of architects designs and engineers scalable and secure technology solutions tailored to your specific needs.',
      },
      {
        title: 'Cloud Solutions',
        subtitle: 'Migrate your operations to the cloud for increased scalability, flexibility, and cost-efficiency.',
      },
      {
        title: 'Security',
        subtitle: 'Protect your data, systems, and applications from cyber threats with our comprehensive security solutions.',
      },
      {
        title: 'Content Management Systems (CMS)',
        subtitle: 'Seamlessly integrate a CMS with your existing systems for easier content creation and management.',
      },
    ],
  },
  {
    title: 'Branding & Design',
    services: [
      {
        title: 'Branding',
        subtitle: 'We help you establish a distinct brand identity with a compelling logo, clear brand guidelines, and a consistent voice that resonates with your audience.',
      },
      {
        title: 'Logo Design',
        subtitle: 'Create a unique and memorable logo that visually represents your brand.',
      },
      {
        title: 'Brand Identity',
        subtitle: 'Ensure a consistent brand image across all touchpoints with clear brand guidelines.',
      },
      {
        title: 'Experience Design ',
        subtitle: 'Our team of user experience (UX) and user interface (UI) designers create user-friendly and visually appealing websites, mobile apps, and e-commerce experiences.',
      },
      {
        title: 'Website & App Design',
        subtitle: 'Protect your data, systems, and applications from cyber threats with our comprehensive security solutions.',
      },
      {
        title: 'User Experience (UX) Research',
        subtitle: 'Gather user feedback and optimize the usability of your digital products for a seamless user experience.',
      },
    ],
  },
];

export const headerData = {
  fr: {
    links: [
      {
        text: 'About us',
        href: getPermalink('/about'),
      },
      {
        text: 'Services',
        links: services
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
    actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
  },
  en: {
    links: [
      {
        text: 'About us',
        href: getPermalink('/about'),
      },
      {
        text: 'Services',
        links: services
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
    actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
  },
  ar: {
    links: [
      {
        text: 'من نحن',
        href: getPermalink('/ar/about'),
      },
      {
        text: 'المدونة',
        href: getBlogPermalink(),
      },
      {
        text: 'تواصل معنا',
        href: '/ar/contact',
      },
    ],
  },
};

export const footerData = {
  links: [
    {
      title: 'Service 1',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Service 2',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'Desktop', href: '#' },
      ],
    },
    {
      title: 'Service 3',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
