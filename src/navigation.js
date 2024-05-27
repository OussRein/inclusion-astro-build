import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const services = [
  {
    title: 'PRODUCT LAUNCHING',
    services: [
      {
        subtitle: 'We combine innovative technologies with proven digital expertise to develop strategies that grow awareness, traffic, engagement, and sales.',
        text: 'Strategy',
        href: getPermalink('/services/strategy'),
      },
      {
        subtitle: 'A collection of matured techniques to build meaningful and user-driven designs.',
        text: 'PRODUCT DESIGN',
        href: getPermalink('/services/product-design'),
      },
      {
        subtitle: 'Winning brand strategies and culture-driven stories.',
        text: 'Brand Elevation',
        href: getPermalink('/services/brand-elevation'),
      },
      {
        subtitle: 'We provide frameworks and guidance for innovating your marketing and digital customer experience',
        text: 'DIGITAL TRANSFORMATION',
        href: getPermalink('/services/digital-transformation'),
      },
      {
        subtitle: 'We provide frameworks and guidance for innovating your customer experience',
        text: 'DIGITAL Intelligence',
        href: getPermalink('/services/digital-intelligence'),
      },
    ],
  },
  {
    title: 'Development',
    services: [
      {
        title: 'Strategy',
        subtitle:
          'We combine innovative technologies with proven digital expertise to develop strategies that grow awareness, traffic, engagement, and sales.',
      },
      {
        title: 'PRODUCT DESIGN',
        subtitle: 'A collection of matured techniques to build meaningful and user-driven designs.',
      },
      {
        title: 'Brand Elevation',
        subtitle: 'Winning brand strategies and culture-driven stories.',
      },
      {
        title: 'DIGITAL TRANSFORMATION',
        subtitle: 'We provide frameworks and guidance for innovating your marketing and digital customer experience',
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
        links: [
          {
            text: 'Lead Generation',
            href: getPermalink('/landing/lead-generation'),
          },
          {
            text: 'Long-form Sales',
            href: getPermalink('/landing/sales'),
          },
          {
            text: 'Click-Through',
            href: getPermalink('/landing/click-through'),
          },
          {
            text: 'Product Details (or Services)',
            href: getPermalink('/landing/product'),
          },
          {
            text: 'Coming Soon or Pre-Launch',
            href: getPermalink('/landing/pre-launch'),
          },
          {
            text: 'Subscription',
            href: getPermalink('/landing/subscription'),
          },
        ],
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
        links: [
          {
            text: 'Lead Generation',
            href: getPermalink('/landing/lead-generation'),
          },
          {
            text: 'Long-form Sales',
            href: getPermalink('/landing/sales'),
          },
          {
            text: 'Click-Through',
            href: getPermalink('/landing/click-through'),
          },
          {
            text: 'Product Details (or Services)',
            href: getPermalink('/landing/product'),
          },
          {
            text: 'Coming Soon or Pre-Launch',
            href: getPermalink('/landing/pre-launch'),
          },
          {
            text: 'Subscription',
            href: getPermalink('/landing/subscription'),
          },
        ],
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
        text: 'خدماتنا',
        links: [
          {
            text: 'خدمة 1',
            href: getPermalink('/ar/landing/lead-generation'),
          },
          {
            text: 'Long-form Sales',
            href: getPermalink('/ar/landing/sales'),
          },
          {
            text: 'Click-Through',
            href: getPermalink('/ar/landing/click-through'),
          },
          {
            text: 'Product Details (or Services)',
            href: getPermalink('/ar/landing/product'),
          },
          {
            text: 'Coming Soon or Pre-Launch',
            href: getPermalink('/ar/landing/pre-launch'),
          },
          {
            text: 'Subscription',
            href: getPermalink('/ar/landing/subscription'),
          },
        ],
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
