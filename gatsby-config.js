const { dependencies } = require('./package.json')

// Get Major.Minor
const gatsbyVersion = dependencies.gatsby.substr(1, 3)
const styledVersion = dependencies['styled-components'].substr(1, 3)
// Get current year.
const year = new Date().getFullYear()

module.exports = {
  siteMetadata: {
    about:
      'Hello my name is Cody, and I am a full stack developer and Navy veteran living in Portland, Oregon. I have 2 years of experience working with JavaScript technologies such as React, Redux, and Node, can work with both SQL and noSQL databases, and have worked with GraphQL. When not writing code I can be found exploring my new stomping grounds in Oregon and cheering on my Jayhawks.',
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
        id: 'appointlet',
        company: 'Appointlet',
        role: 'Web Developer',
        dates: 'September 2018 - present',
        desc: ''
      },
      {
        id: 'bothofus',
        company: 'BøthofUs',
        role: 'Frontend Developer',
        dates: 'March - May 2018',
        desc:
          "Worked as a freelance frontend developer working on the beta-release of Mate.org. The project made use of VueJS and Apollo GraphQL, requiring me to learn a new framework overnight. I successfuly implemented the project's test suite and continuous integration as well as cleaned up the build process."
      }
    ],
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
    copyright: `© 2017-${year} Cody Brunner`,
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
        desc: 'Fitbit dashboard written in Django, Vue, & Chart JS.',
        href: 'http://rockchalkwushock.pythonanywhere.com/',
        id: 'django-fit',
        name: 'django-fit',
        src: 'https://github.com/rockchalkwushock/django-fit'
      },
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
    siteUrl: 'https://www.codybrunner.me',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}