// Native
const { resolve } = require('path')

const { dependencies } = require('./package.json')

// Get Major.Minor
// NOTE: Setup 0-3 for Exact version, switch to 1-3 when add ^x.x.x back.
const gatsbyVersion = dependencies.gatsby.substr(0, 3)
const styledVersion = dependencies['styled-components'].substr(1, 3)
// Get current year.
const year = new Date().getFullYear()

module.exports = {
  plugins: [
    // 'gatsby-plugin-canonical-urls',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_ID}`,
        anonymize: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'codybrunner.me',
        short_name: 'Cody Brunner',
        description: 'Web Development Portfolio and Resume for Cody Brunner',
        start_url: '/',
        lang: 'en-US',
        orientation: 'any',
        background_color: '#7a9eb1',
        theme_color: '#ffe1b6',
        display: 'standalone',
        icon: 'src/assets/favicon.png'
      }
    },
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#ffe1b6',
        showSpinner: false
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://codybrunner.me',
        sitemap: 'https://codybrunner.me/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${resolve(__dirname, './src/img')}`
      }
    },
    'gatsby-transformer-sharp'
  ],
  siteMetadata: {
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
    description: 'Web Development Portfolio and Resume for Cody Brunner',
    googleVerify: 'qNDU-jTYxpCxdkBdyG_M6GK1x6rDgtPQ-37chsjf0Uk',
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
        href: '#about',
        text: 'About'
      },
      {
        id: 3,
        href: 'https://codybrunner.blog',
        text: 'Blog'
      },
      {
        id: 4,
        href: '#experience',
        text: 'Experience'
      },
      {
        id: 5,
        href: '#education',
        text: 'Education'
      },
      {
        id: 6,
        href: '#projects',
        text: 'Projects'
      },
      {
        id: 7,
        href: '#skills',
        text: 'Skills'
      },
      {
        id: 8,
        href: '#contact',
        text: 'Contact'
      }
    ],
    title: 'Cody Brunner - Full-Stack JavaScript Developer',
    siteUrl: 'https://codybrunner.me'
  }
}
