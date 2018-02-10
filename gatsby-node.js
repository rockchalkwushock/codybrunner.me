// Navtive
const { resolve } = require('path')

// Package
const { createFilePath } = require('gatsby-source-filesystem')
const {
  createLinkedPages,
  createPaginationPages
} = require('gatsby-pagination')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

// Condition
const isProd = process.env.NODE_ENV === 'production'

// Building in production we don't want to create pages for drafts.
const args = isProd
  ? 'filter: { frontmatter: { draft: { ne: true } } } sort: { order: DESC, fields: [frontmatter___date] }'
  : 'sort: { order: DESC, fields: [frontmatter___date] }'

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return new Promise((_resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(${args}) {
          edges {
            node {
              excerpt(pruneLength: 250)
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                description
                draft
                keywords
                tags
                title
              }
              html
              timeToRead
            }
          }
        }
      }
    `).then(result => {
      // Handle error case.
      if (result.errors) return reject(result.errors)
      // Constants for the following code.
      const PAGE_LIMIT = 10
      const postsByTags = {}
      const posts = result.data.allMarkdownRemark.edges
      const filteredPosts = posts.filter(
        ({ node }) => node.fields.slug !== '/about/'
      )
      // Create home page.
      createPage({
        path: '/',
        component: resolve('src/templates/index.js'),
        context: {
          posts: filteredPosts.slice(0, 3)
        }
      })
      // Create about page.
      createPage({
        path: '/about',
        component: resolve('src/templates/about.js'),
        context: {
          content: posts.filter(({ node }) => node.fields.slug === '/about/')
        }
      })
      // Create blog page(s) with pagination.
      createPaginationPages({
        createPage,
        edges: filteredPosts,
        limit: PAGE_LIMIT,
        component: resolve('src/templates/posts.js'),
        pathFormatter: path => `/posts/${path}`
      })
      // Create individual posts with pagination.
      createLinkedPages({
        createPage,
        edges: filteredPosts,
        component: resolve('src/templates/post.js'),
        edgeParser: edge => ({
          path: `${edge.node.fields.slug}`,
          context: {
            slug: edge.node.fields.slug
          }
        })
      })

      posts.forEach(({ node }) => {
        if (node.frontmatter.tags) {
          node.frontmatter.tags.forEach(tag => {
            if (!postsByTags[tag]) {
              postsByTags[tag] = []
            }
            postsByTags[tag].push(node)
          })
        }
      })

      Object.keys(postsByTags).forEach(term => {
        // Create term pages with corresponding pages.
        createPage({
          path: `/tags/${term}`,
          component: resolve(`src/templates/term.js`),
          context: {
            taggedPosts: postsByTags[term],
            tag: term
          }
        })
      })

      createPage({
        path: '/certs',
        component: resolve('src/templates/certs.js')
      })
      // Finalize Promise
      _resolve()
    })
  })
}

// Adds `slug` key/value to each node.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}

/* eslint-disable default-case */
if (process.env.ANALYZE) {
  exports.modifyWebpackConfig = ({ config, stage }) => {
    switch (stage) {
      case 'build-javascript':
        config.plugin('Bundle Analyzer', BundleAnalyzerPlugin, [
          {
            analyzerMode: 'static',
            openAnalyzer: false,
            generateStatsFile: true
          }
        ])

        break
    }

    return config
  }
}
