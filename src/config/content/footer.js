/* eslint-disable import/no-unresolved */
import {faTwitter, faGithub, faSlack} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';


export default{
    img: {
        src: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702085/CiS/rocket_vkcatz.png',
        alt: 'Code Is Science',
    },
    copyright: 'Copyright © {{ new Date().getFullYear() }} Code is Science',
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
                id: 1,
                icon: faEnvelope,
                head: 'Email',
                link: 'mailto:contact@codeisscience.com',
                color: 'white',
            },
            {
                id: 2,
                icon: faTwitter,
                head: 'Twitter',
                link: 'https://twitter.com/codeisscience',
                color: '#00acee',
            },
            {
                id: 3,
                icon: faGithub,
                head: 'Github',
                link: 'https://github.com/codeisscience',
                color: 'black',
            },
            {
                id: 4,
                icon: faSlack,
                head: 'Slack',
                link: '',
                color: '#e01e5a',
            }
        ]
    }
}