// Native
const { resolve } = require('path')

// Package
if (!process.env.CI) {
  // .env not present on Github or for CircleCi
  require('dotenv-safe').load()
}

const { dependencies } = require('../package.json')

// Get Major.Minor
// NOTE: Setup 0-3 for Exact version, switch to 1-3 when add ^x.x.x back.
const gatsbyVersion = dependencies.gatsby.substr(0, 3)
const styledVersion = dependencies['styled-components'].substr(1, 3)
// Get current year.
const year = new Date().getFullYear()
// Site domain
const domain = process.env.SITE_DOMAIN
// Condition
const isProd = process.env.NODE_ENV === 'production'
// Default Plugins
const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-react-next',
  'gatsby-plugin-sharp',
  'gatsby-plugin-styled-components',
  'gatsby-plugin-twitter',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: `${resolve(__dirname, '../src/content/posts')}`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'img',
      path: `${resolve(__dirname, '../src/img')}`
    }
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-autolink-headers',
        'gatsby-remark-emoji',
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
]
// Dev Plugins
const devOnly = [
  {
    resolve: 'gatsby-plugin-accessibilityjs',
    options: {
      injectStyles: false,
      errorClassName: false
    }
  }
]
// Prod Plugins
const prodOnly = [
  {
    resolve: 'gatsby-plugin-canonical-urls',
    options: {
      siteUrl: `${domain}`
    }
  },
  'gatsby-plugin-catch-links',
  {
    // REVIEW: I could just copy the output to another directory
    // and just copy over to '/public/'
    resolve: 'gatsby-plugin-favicon',
    options: {
      logo: './src/assets/favicon.png',
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  },
  {
    resolve: 'gatsby-plugin-feed',
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) =>
            allMarkdownRemark.edges.map(edge => ({
              ...edge.node.frontmatter,
              url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
              guid: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
              custom_elements: [{ 'content:encoded': edge.node.html }]
            })),
          query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: { draft: { ne: true } }}
              ) {
                edges {
                  node {
                    html
                    fields { slug }
                    frontmatter {
                      description
                      date
                      title
                    }
                  }
                }
              }
            }
          `,
          output: '/rss.xml'
        }
      ]
    }
  },
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: `${process.env.GOOGLE_ANALYTICS_ID}`,
      anonymize: true
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
  }
]

module.exports = {
  devOnly,
  domain,
  gatsbyVersion,
  isProd,
  plugins,
  prodOnly,
  styledVersion,
  year
}
