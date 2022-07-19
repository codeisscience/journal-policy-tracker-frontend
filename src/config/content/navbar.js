import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'Navbar',
    logo: {
        src: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702059/CiS/logo_ch4fzv.png',
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
            id: 'journals',
            name: 'Journals',
            link: '/journal',
        },
        {
            id: 'manifesto',
            name: 'Manifesto',
            link: '/manifesto',
        },
        {
            id: 'contact',
            name: 'Contact',
            link: '/contact',
        },
        {
            id: 'signup',
            name: 'Signup',
            link: '/signup',
        },
        {
            id: 'login',
            name: null,
            link: '/login',
        }
    ],
};