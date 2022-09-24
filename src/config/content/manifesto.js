/* eslint-disable max-len */
import { ImTwitter, ImMail, ImGithub } from 'react-icons/im';

export default {
  title: 'Manifesto',
  section1: {
    img: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702069/CiS/manifesto-img-1_tsnufg.png',
    alt: 'manifesto image',
    head: 'Code is Science Manifesto',
    sub: 'Through working with scientific code, we agree that scientific code needs to be treated as a genuine research output. For this reason we have created a manifesto, which will allow both individuals and organisations to sign up and agree to make genuine efforts to both make their own scientific code open, as well as sharing the manifesto mission with others.',
    link: 'https://codeisscience.github.io/manifesto/manifesto.html',
  },
  section2: {
    head: 'I want to express my support for the manifesto! Tell me how',
    cards: [
      {
        id: 1,
        img: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702103/CiS/walking-man_ncunny.png',
        alt: 'Card Image',
        head: 'Sign the manifesto as an individual',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSeaDLDaREkUyOwpvbQf41hxT12ixoBToTdBhlgTj_YoW0tSgw/viewform',
      },
      {
        id: 2,
        img: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702076/CiS/peers_m0fgdd.png',
        alt: 'Card Image',
        head: 'Sign the manifesto as an organisation or institution.',
        sub: 'Please make sure you have authority to sign on behalf of your organisation before you sign on behalf of an organisation.',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdUPKlP__5saaYMyEJwkHF3gRNAHiKihOlp6zd6QK4vUqs3gg/viewform',
      },
      {
        id: 3,
        img: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702037/CiS/hands-icon_omk7ug.png',
        alt: 'Card Image',
        sub: 'We’re particularly interested in adding logos and links indicating organisational support from publishers, funders, and research institutions.',
      },
    ],
  },
  section3: [
    {
      head: 'How can I contribute?',
      list: [
        {
          id: 1,
          sub: 'Sign the manifesto and share with all your friends!',
        },
        {
          id: 2,
          sub: 'Add links to your personal and institutional sites.',
        },
        {
          id: 3,
          sub: 'You can also look at the issues on GitHub and see if there’s anything else you can pick up. You can also look at our roadmap to get an understanding of our timeline.',
        },
      ],
    },
  ],
  section4: [
    {
      head: 'Contact',
      links: [
        {
          id: 1,
          icon: ImTwitter,
          sub: 'Twitter: @codeisscience',
          link: 'https://twitter.com/codeisscience',
        },
        {
          id: 2,
          icon: ImMail,
          sub: 'Email: contact@codeisscience.com',
          link: 'mailto:contact@codeisscience.com',
        },
        {
          id: 3,
          icon: ImGithub,
          sub: 'Github: You can also create issues on the manifesto repository',
          link: 'https://github.com/codeisscience',
        },
      ],
    },
  ],
};
