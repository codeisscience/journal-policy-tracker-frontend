import { ImTwitter, ImMail, ImGithub } from 'react-icons/im';
import { IoLogoSlack } from 'react-icons/io';

export default{
    img: {
        src: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702085/CiS/rocket_vkcatz.png',
        alt: 'Code Is Science',
    },
    copyright: 'Copyright © 2022 Code is Science',
    col1: {
        head: 'Useful Links',
        links: [
            {
                id:1,
                sub: 'Contribute',
                link: 'https://github.com/codeisscience',
            },
            {
                id: 2,
                sub: 'Manifesto',
                link: 'https://codeisscience.github.io/manifesto/manifesto.html',
            },
            {
                id: 3,
                sub: 'Code of Conduct',
                link: '/home',
            },
        ]
    },
    col2: {
        head: 'Resources',
        links: [
            {
                id: 1,
                sub: 'Authors',
                link: '/home',
            },
            {
                id: 2,
                sub: 'Open Science',
                link: '/home',
            },
            {
                id: 3,
                sub: 'Contributors',
                link: '/home',
            }
        ]
    },
    socials: {
        head: 'Contact Us',
        links: [
            {
                icon: ImMail,
                link: 'mailto:contact@codeisscience.com',
            },
            {
                icon: ImTwitter,
                link: 'https://twitter.com/codeisscience',
            },
            {
                icon: ImGithub,
                link: 'https://github.com/codeisscience',
            },
            {
                icon: IoLogoSlack,
                link: '',
            }
        ]
    }
}