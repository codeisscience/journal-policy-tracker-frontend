/* eslint-disable max-len */
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Navbar',
  logo: {
    src: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1662665526/CiS/code-is-science-model-2-light_zaohia.png',
    alt: 'Code Is Science',
  },
  icon: faBars,
  icon2: faXmark,
  navItems: [
    {
      id: 'home',
      name: 'Home',
      link: '/home',
    },
    {
      id: 'journal',
      name: 'Journals',
      link: '/journal',
    },
    {
      id: 'addjournal',
      name: 'Add Journal',
      link: '/addjournal',
    },
    {
      id: 'profile',
      name: 'Profile',
      link: '/profile',
    },
    // {
    //   id: 'manifesto',
    //   name: 'Manifesto',
    //   link: '/manifesto',
    // },
    // {
    //   id: 'contact',
    //   name: 'Contact',
    //   link: '/contact',
    // },
    {
      id: 'signup',
      name: 'Signup',
      link: '/signup',
    },
    {
      id: 'login',
      name: null,
      link: '/login',
    },
    {
      id: 'policy',
      name: null,
      link: '/policy/:id',
    },
  ],
};
