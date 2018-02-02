const { dependencies } = require('./package.json')

// Get Major.Minor
const gatsbyVersion = dependencies.gatsby.substr(1, 3)
// Get current year.
const year = new Date().getFullYear()

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/content/posts`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-emoji',
          'gatsby-remark-external-links',
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: true,
              maxWidth: 736,
              sizeByPixelDensity: false
            }
          },
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin: 0.5em 0'
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp'
  ],
  siteMetadata: {
    disqusShortname: 'codybrunner-rocks',
    jobTitle: 'Full-Stack JavaScript Developer',
    links: {
      creativeCommons: {
        href: 'https://creativecommons.org/licenses/by/3.0/', // TODO update this url
        text: 'All Rights Reserved.'
      },
      gatsby: {
        href: 'https://gatsbyjs.org/',
        text: `Powered by Gatsby ${gatsbyVersion}`
      },
      now: {
        href: 'https://zeit.co/now',
        text: 'Hosted on Now'
      },
      src: {
        href: 'https://github.com/rockchalkwushock/codybrunner.rocks'
      }
    },
    market: [
      {
        href: 'mailto:rockchalkwushock@icloud.com',
        label: 'Email',
        text: 'Email'
      },
      {
        href:
          'https://www.dropbox.com/s/hokjljqc8iob7xd/Cody%20A%20Brunner%20-%20Web%20Developer%20Resume.pdf?dl=1',
        label: 'Resume',
        text: 'Resume'
      }
    ],
    siteAuthor: 'Cody Brunner',
    siteCopyright: `© 2017-${year} Cody Brunner`,
    siteDescription:
      'Cody Brunner is a Full-Stack JavaScript Developer living in Wichita, Kansas',
    siteKeywords:
      'Cody Brunner, Full-Stack JavaScript Developer, Wichita, web-development, tech blog, Node.js, React.js, Apollo/GraphQL',
    siteLang: 'en',
    siteMenu: [
      { id: 1, href: '/', text: 'Home' },
      { id: 2, href: '/about', text: 'About' },
      { id: 3, href: '/posts', text: 'Blog' },
      { id: 4, href: '/tags', text: 'Tags' }
    ],
    siteTitle: 'Cody Brunner - Full-Stack JavaScript Developer',
    siteUrl: 'https://codybrunner.rocks',
    social: [
      {
        className: 'fab fa-github fa-2x',
        href: 'https://github.com/rockchalkwushock',
        label: 'Github'
      },
      {
        className: 'fab fa-instagram fa-2x',
        href: 'https://www.instagram.com/rockchalkwushock/',
        label: 'Instagram'
      },
      {
        className: 'fab fa-telegram-plane fa-2x',
        href: 'https://t.me/rockchalkwushock',
        label: 'Telegram'
      },
      {
        className: 'fab fa-twitter fa-2x',
        href: 'https://twitter.com/RockChalkDev',
        label: 'Twitter'
      },
      {
        className: 'fab fa-youtube fa-2x',
        href: 'https://www.youtube.com/channel/UCZgBTMhX7jZTkbm7Fpv2bWw',
        label: 'Youtube'
      }
    ]
  }
}
