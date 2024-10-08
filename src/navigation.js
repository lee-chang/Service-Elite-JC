import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'À Propos',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },

    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: '(514) 718-8772', href: 'tel:1-514-718-8772', target: '_self' }],
};

export const footerData = {
  links:[],
  // links: [
  //   {
  //     title: 'À Propos',
  //   },
  //   {
  //     title: 'Platform',
  //     // links: [
  //     //   { text: 'Developer API', href: '#' },
  //     //   { text: 'Partners', href: '#' },
  //     //   { text: 'Atom', href: '#' },
  //     //   { text: 'Electron', href: '#' },
  //     //   { text: 'AstroWind Desktop', href: '#' },
  //     // ],
  //   },
  //   {
  //     title: 'Support',
  //   },
  //   {
  //     title: 'Company',
  //     href: '#',
  //   },
  // ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '/#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '/#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://avatars.githubusercontent.com/u/64663328?v=4" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/lee-chang/"> Lee </a>
  `,
};
