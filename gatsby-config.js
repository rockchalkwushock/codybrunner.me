// Native
const { resolve } = require('path')

const { dependencies } = require('./package.json')

// Get Major.Minor
const gatsbyVersion = dependencies.gatsby.substr(1, 3)
const styledVersion = dependencies['styled-components'].substr(1, 3)
// Get current year.
const year = new Date().getFullYear()

module.exports = {
  plugins: [
    'gatsby-plugin-accessibilityjs',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: process.env.SITE_DOMAIN
      }
    },
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
        background_color: '#415865',
        theme_color: '#e3eff3',
        display: 'standalone',
        icon: 'src/assets/favicon.png'
      }
    },
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#e3eff3',
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
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${resolve(__dirname, './src/images')}`
      }
    },
    'gatsby-transformer-sharp'
  ],
  siteMetadata: {
    about:
      "Hello my name is Cody, and I am a full stack developer and Navy veteran living in Portland, Oregon. I am currently a student of the PDX Code Guild's Full Stack Python-based web development boot camp, and will be completing the program in September. I have 2 years of experience working with JavaScript technologies such as React, Redux, and Node, can work with both SQL and noSQL databases, and have worked with GraphQL. Ideally I am looking for a full stack role that will give me a balance of working with both the front and backend code bases and I’d love to work more with GraphQL. When not writing code I can be found exploring my new stomping grounds in Oregon and cheering on my Jayhawks.",
    author: 'Cody Brunner',
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
        className: 'fab, linkedin',
        href: 'https://www.linkedin.com/in/cody-brunner',
        label: 'LinkedIn'
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
    education: [
      {
        id: 'pdx',
        location: 'PDX Code Guild',
        name: 'Full Stack Web Development Boot Camp',
        dates: 'June - September 2018'
      },
      {
        id: 'watc',
        location: 'Wichita Area Technical College',
        name: 'A.A.S in Robotic Technology',
        dates: 'August 2013 - May 2015'
      },
      {
        id: 'kwu',
        location: 'Kansas Wesleyan University',
        name: 'B.A. Criminal Justice, B.A. Sociology',
        dates: 'August 2008 - May 2011'
      }
    ],
    experience: [
      {
        id: 'bothofus',
        company: 'BøthofUs',
        role: 'Frontend Developer',
        dates: 'March - May 2018',
        desc:
          "Worked as a freelance frontend developer working on the beta-release of Mate.org. The project made use of VueJS and Apollo GraphQL, requiring me to learn a new framework overnight. I successfuly implemented the project's test suite and continuous integration as well as cleaned up the build process."
      }
    ],
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
        href: 'https://www.dropbox.com/s/ydagcln6p0sk513/Resume.docx?dl=1',
        text: 'Resume'
      },
      {
        id: 9,
        href: '#contact',
        text: 'Contact'
      }
    ],
    projects: [
      {
        desc: 'Personal & Technology blog written in GatsbyJS.',
        href: 'https://codybrunner.blog',
        id: 'codybrunner.blog',
        name: 'codybrunner.blog',
        src: 'https://github.com/rockchalkwushock/codybrunner.blog'
      },
      {
        desc: 'Authentication package for MicroJS framework.',
        href: 'https://www.npmjs.com/package/microauth-vkontakte',
        id: 'microauth-vkontakte',
        name: 'microauth-vkontakte',
        src: 'https://github.com/microauth/microauth-vkontakte'
      },
      {
        desc:
          'Package/Tutorial for learning how to write open source software.',
        href: 'https://www.npmjs.com/package/how-to-open-source',
        id: 'how-to-open-source',
        name: 'how-to-open-source',
        src: 'https://github.com/rockchalkwushock/how-to-open-source'
      },
      {
        desc: 'Assisting in the ongoing rebuild of this non-profit webpage.',
        href: 'https://highfivesfoundation.org/',
        id: 'h5s',
        name: 'High Fives Foundation Website',
        src: 'https://github.com/HighFivesFoundation/website'
      },
      {
        desc:
          'Photography Business Website for Masha Eltsova written in NextJS.',
        href: 'https://mashaeltsovaphotography.com',
        id: 'mashaeltsova',
        name: 'Masha Eltsova Photography',
        src: 'https://github.com/rockchalkwushock/mashaeltsova-photography'
      },
      {
        desc:
          'My personal website & web development portfolio written in GatsbyJS.',
        href: 'https://codybrunner.me',
        id: 'codybrunner.me',
        name: 'codybrunner.me',
        src: 'https://github.com/rockchalkwushock/codybrunner.me'
      },
      {
        desc:
          'Simple weather app built using ReactJS, Apollo GraphQL, & APIXU API.',
        href: 'https://the-rising-sun.now.sh/',
        id: 'rising-sun',
        name: 'the-rising-sun',
        src: 'https://github.com/rockchalkwushock/react-weather-app'
      },
      {
        desc: 'Pomodoro app built using NextJS.',
        href: 'https://blindfold-em.now.sh/',
        id: 'blindfold-em',
        name: 'blindfold-em',
        src: 'https://github.com/rockchalkwushock/blindfold-em'
      },
      {
        desc: 'Chuck Norris bot for the popular chat service Telegram.',
        href: 'https://telegram.me/ChuckNorrisJokeBot',
        id: 'chuck-norris',
        name: 'chuck norris telegram bot',
        src: 'https://github.com/rockchalkwushock/telegram_chuck_norris_bot'
      }
    ],
    skills: [
      { id: 'html', text: 'HTML5' },
      { id: 'css', text: 'CSS3' },
      { id: 'es6', text: 'ES6 JavaScript' },
      { id: 'git', text: 'Git' },
      { id: 'node', text: 'Node' },
      { id: 'mongo', text: 'MongoDB' },
      { id: 'psql', text: 'PostgreSQL' },
      { id: 'exjs', text: 'ExpressJS' },
      { id: 'react', text: 'ReactJS + Redux' },
      { id: 'vue', text: 'VueJS' },
      { id: 'python', text: 'Python' },
      { id: 'elixir', text: 'Elixir' },
      { id: 'bdd', text: 'BDD/TDD' },
      { id: 'ci', text: 'CI/CD' }
    ],
    siteUrl: process.env.SITE_DOMAIN,
    title: 'Cody Brunner - Full-Stack JavaScript Developer',
    twitter: '@RockChalkDev'
  }
}
