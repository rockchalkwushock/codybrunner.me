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
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'codybrunner.rocks',
      short_name: 'Cody Rocks',
      description: 'Personal website, tech blog, & portfolio for Cody Brunner',
      start_url: '/',
      lang: 'en-US',
      orientation: 'any',
      background_color: '#7a9eb1',
      theme_color: '#ffe1b6',
      display: 'standalone',
      icons: [
        {
          src: 'android-chrome-36x36.png',
          sizes: '36x36',
          type: 'image/png'
        },
        {
          src: 'android-chrome-48x48.png',
          sizes: '48x48',
          type: 'image/png'
        },
        {
          src: 'android-chrome-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: 'android-chrome-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: 'android-chrome-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'android-chrome-256x256.png',
          sizes: '256x256',
          type: 'image/png'
        },
        {
          src: 'android-chrome-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
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
  'gatsby-plugin-sitemap'
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
