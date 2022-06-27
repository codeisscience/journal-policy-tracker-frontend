/* eslint-disable max-len */
export default {
    landing: {
        head: 'Read and Sign the Manifesto',
        img: {
            src: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702025/CiS/bg_jhdw6s.png',
            alt: 'landing'
        }
    },
    section1: {
        head: 'Premise',
        img: {
            src: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702092/CiS/section-img_pkjqly.png',
            alt: 'laptops',
        },
        content: [
            {
                id: 1,
                subhead: 'Science is often computing',
                para: 'Much of modern science involves code these days, in large part due to the amount of data available - it would be almost impossible to analyse without computational    assistance.'
            },
            {
                id: 2,
                subhead: 'Science requires peer review',
                para: 'One of the basic prerequisites for any published scientific results is that it be reviewed by peers, to ensure the research and conclusions are valid.'
            }
    ]     
   },
   section2: {
    content: [
        {
            id: 1,
            head: 'Code == Science',
            para: 'If software is required to perform science, it stands to reason that errors in your software mean errors in your science.',
            img: {
                src: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702030/CiS/clock_dryc5d.png',
                alt: 'clock',
            },
        },
        {
            id: 2,
            head: 'Possible Solution?',
            para: 'Scientific code needs to be peer reviewed, and ideally open source.That’s easier said than done. Getting there requires awareness, culture shift, and adherence to best practices.',
            img: {
                src: 'https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702098/CiS/talking_q54knb.png',
                alt: 'humans',
            }
        },
    ]
   },

   section3: {
    content: [
        {
            head: 'Looking to Contribute?',
            para: [
                {
                    id: 1,
                    sub: 'Do you wish more code was open source? Have you wished in the past that a DB of open source journals existed? Share your story.'
                },
                {
                    id: 2,
                    sub: 'Add more journals to our list Right now it’s a google form, but hopefully we’ll have the full site up and running soon!'
                },
                {
                    id: 3,
                    sub: 'Pick up a technical or design task on GitHub: https://github.com/codeisscience/code-is-science'
                }
            ]
        },
        {
            head: 'Latest Posts',
            links: [
                {
                    title: 'Good practices & good quality code',
                    link: '',
                },
                {
                    title: 'Mozfest Session 2017',
                    link: '',
                },
                {
                    title: 'Mozfest Is Coming',
                    link: '',
                }
            ]
        }
    ]
   }
}