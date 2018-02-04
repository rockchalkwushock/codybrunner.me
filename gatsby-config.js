// Package
require('dotenv-safe').load()
const { dependencies } = require('./package.json')

// Get Major.Minor
const gatsbyVersion = dependencies.gatsby.substr(1, 3)
const styledVersion = dependencies['styled-components'].substr(1, 3)
// Get current year.
const year = new Date().getFullYear()
// Condition
const isProd = process.env.NODE_ENV === 'production'
// Default Plugins
const plugins = [
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: ['Raleway']
    }
  },
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
        // 'gatsby-remark-external-links',
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
  'gatsby-plugin-canonical-urls',
  'gatsby-plugin-catch-links',
  {
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
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      background_color: '#7a9eb1',
      description: 'Personal website, tech blog, & portfolio for Cody Brunner',
      display: 'standalone',
      lang: 'en-US',
      name: 'codybrunner.rocks',
      short_name: 'Cody Rocks',
      start_url: 'http://localhost:9000',
      theme_color: '#ffe1b6'
      // icons: [] TODO
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
  // 'gatsby-plugin-preact',
  {
    resolve: 'gatsby-plugin-sentry',
    options: {
      dsn: `${process.env.SENTRY_DSN}`
    }
  }
]

module.exports = {
  pathPrefix: '/', // You need this for the /static/ assets with withPrefix()
  plugins: isProd ? [...plugins, ...prodOnly] : [...plugins, ...devOnly],
  siteMetadata: {
    aboutSnippet:
      'Cody Brunner is a full-stack JavaScript developer & Navy Veteran residing in Wichita, Kansas. Cody primarily works with Node, React, & GraphQL. When not writing code he loves to go hiking, play with his dog & niece, and watchhis Jayhawks win!',
    author: 'Cody Brunner',
    business: [
      {
        className: 'fas fa-envelope',
        href: 'mailto:rockchalkwushock@icloud.com',
        label: 'Email'
      },
      {
        className: 'fab fa-telegram-plane',
        href: 'https://t.me/rockchalkwushock',
        label: 'Telegram'
      },
      {
        className: 'fas fa-file-pdf',
        href:
          'https://www.dropbox.com/s/hokjljqc8iob7xd/Cody%20A%20Brunner%20-%20Web%20Developer%20Resume.pdf?dl=1',
        label: 'Resume'
      }
    ],
    contacts: [
      {
        className: 'fab fa-github',
        href: 'https://github.com/rockchalkwushock',
        label: 'Github'
      },
      {
        className: 'fab fa-instagram',
        href: 'https://www.instagram.com/rockchalkwushock',
        label: 'Instagram'
      },
      {
        className: 'fab fa-linkedin',
        href: 'https://www.linkedin.com/in/cody-brunner-324930158',
        label: 'LinkedIn'
      },
      {
        className: 'fas fa-rss',
        href: 'rss.xml',
        label: 'RSS Feed'
      },
      {
        className: 'fab fa-twitter',
        href: 'https://twitter.com/RockChalkDev',
        label: 'Twitter'
      },
      {
        className: 'fab fa-youtube',
        href: 'https://www.youtube.com/channel/UCZgBTMhX7jZTkbm7Fpv2bWw',
        label: 'Youtube'
      }
    ],
    copyright: `© 2017-${year} Cody Brunner`,
    description:
      'Cody Brunner is a Full-Stack JavaScript Developer living in Wichita, Kansas',
    disqusShortname: 'codybrunner-rocks',
    employment:
      'Are you interested in contacting Cody for employment opportunities? Feel free to reach out to him via email, Telegram, or go ahead and checkout his resume hosted on DropBox.',
    googleVerify: 'TODO',
    jobTitle: 'Full-Stack JavaScript Developer',
    keywords:
      'Cody Brunner, Full-Stack JavaScript Developer, Wichita, web-development, tech blog, Node.js, React.js, Apollo/GraphQL',
    lang: 'en_US',
    links: {
      creativeCommons: {
        href: 'https://creativecommons.org/licenses/by/3.0', // TODO update this url
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
        href: 'https://github.com/rockchalkwushock/codybrunner.rocks'
      },
      styled: {
        href: 'https://www.styled-components.com',
        text: `Styled with Styled-Components ${styledVersion}`
      }
    },
    menu: [
      { id: 1, href: '/', text: 'Home' },
      { id: 2, href: '/about', text: 'About' },
      { id: 3, href: '/posts', text: 'Blog' },
      { id: 4, href: '/tags', text: 'Tags' }
    ],
    title: 'Cody Brunner - Full-Stack JavaScript Developer',
    twitter: '@RockChalkDev',
    siteUrl: isProd ? 'http://localhost:9000' : '/'
  }
}
