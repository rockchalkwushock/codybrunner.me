const {
  devOnly,
  domain,
  gatsbyVersion,
  isProd,
  plugins,
  prodOnly,
  styledVersion,
  year
} = require('./config')

module.exports = {
  pathPrefix: '/',
  plugins: isProd ? [...plugins, ...prodOnly] : [...plugins, ...devOnly],
  siteMetadata: {
    aboutSnippet:
      'Hello I am Cody, a full-stack JavaScript developer & Navy Veteran residing in Portland, Oregon. I primarily work with Node, React, & GraphQL. When not writing code I love to go hiking and watch my Jayhawks win!',
    author: 'Cody Brunner',
    business: [
      {
        className: 'fas, envelope',
        href: 'mailto:rockchalkwushock@icloud.com',
        label: 'Email'
      },
      {
        className: 'fab, linkedin',
        href: 'https://www.linkedin.com/in/cody-brunner',
        label: 'LinkedIn'
      },
      {
        className: 'fas, file-pdf',
        href: 'https://www.dropbox.com/s/ydagcln6p0sk513/Resume.docx?dl=1',
        label: 'Resume'
      }
    ],
    contacts: [
      {
        className: 'fab, github',
        href: 'https://github.com/rockchalkwushock',
        label: 'Github'
      },
      {
        className: 'fab, instagram',
        href: 'https://www.instagram.com/rockchalkwushock',
        label: 'Instagram'
      },
      {
        className: 'fab, medium-m',
        href: 'https://medium.com/@RockChalkDev',
        label: 'Medium'
      },
      {
        className: 'fas, rss',
        href: 'rss.xml',
        label: 'RSS Feed'
      },
      {
        className: 'fab, twitter',
        href: 'https://twitter.com/RockChalkDev',
        label: 'Twitter'
      },
      {
        className: 'fab, youtube',
        href: 'https://www.youtube.com/channel/UCZgBTMhX7jZTkbm7Fpv2bWw',
        label: 'Youtube'
      }
    ],
    copyright: `© 2017-${year} Cody Brunner`,
    description:
      'Cody Brunner is a Full-Stack JavaScript Developer living in Portland, Oregon',
    employment:
      'Please feel free to reach out to me via email, LinkedIn, and chekout my resume.',
    googleVerify: 'qNDU-jTYxpCxdkBdyG_M6GK1x6rDgtPQ-37chsjf0Uk',
    jobTitle: 'Full-Stack JavaScript Developer',
    keywords:
      'Cody Brunner, Full-Stack JavaScript Developer, Portland, Oregon, web-development, tech blog, Node.js, React.js, Apollo/GraphQL',
    lang: 'en',
    links: {
      creativeCommons: {
        href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
        text: 'All Rights Reserved.'
      },
      gatsby: {
        href: 'https://gatsbyjs.org',
        text: `Powered by Gatsby ${gatsbyVersion}`
      },
      now: {
        href: 'https://zeit.co/now',
        text: 'Hosted on Now'
      },
      src: {
        href: 'https://github.com/rockchalkwushock/codybrunner.me'
      },
      styled: {
        href: 'https://www.styled-components.com',
        text: `Styled with Styled-Components ${styledVersion}`
      }
    },
    menu: [
      {
        id: 1,
        href: '/',
        text: 'Home'
      },
      {
        id: 2,
        href: '/about',
        text: 'About'
      },
      {
        id: 3,
        href: '/posts/1',
        text: 'Blog'
      }, // '/posts/1' is from using `gatsby-paginate`
      {
        id: 4,
        href: '/certs',
        text: 'Certifications'
      }
    ],
    tech:
      'The below are just some of the technologies I know and tooling I use frequently.',
    title: 'Cody Brunner - Full-Stack JavaScript Developer',
    twitter: '@RockChalkDev',
    siteUrl: `${domain}`
  }
}
