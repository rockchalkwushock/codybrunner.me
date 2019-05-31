const { dependencies } = require('./package.json')

// Get Major.Minor
const gatsbyVersion = dependencies.gatsby.substr(1, 3)
const styledVersion = dependencies['styled-components'].substr(1, 3)
// Get current year.
const year = new Date().getFullYear()

module.exports = {
  siteMetadata: {
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