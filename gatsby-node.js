// Navtive
const { resolve } = require('path')

// Package
const { createFilePath } = require('gatsby-source-filesystem')

// Condition
const isProd = process.env.NODE_ENV === 'production'

// Look up params for GraphQL Query (dev vs prod).
// Building in production we don't want to create pages for drafts.
const args = isProd
  ? 'filter: { frontmatter: { draft: { ne: true } } } sort: { order: ASC, fields: [frontmatter___date] }'
  : 'sort: { order: ASC, fields: [frontmatter___date] }'

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return new Promise((_resolve, reject) => {
    // NOTE: order is ASC because of next/prev context of array of posts.
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
      // Array of nodes(posts).
      const posts = result.data.allMarkdownRemark.edges
      // Create home page.
      createPage({
        path: '/',
        component: resolve('src/templates/index.js'),
        context: {
          posts: posts
            .filter(({ node }) => node.fields.slug !== '/about/')
            .reverse()
            .slice(0, 5)
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
      // Create blog page and all corresponding posts.
      createPage({
        path: '/posts',
        component: resolve('src/templates/posts.js'),
        context: {
          posts: posts
            .filter(({ node }) => node.fields.slug !== '/about/')
            .reverse()
        }
      })

      posts
        .filter(({ node }) => node.fields.slug !== '/about/')
        .map(({ node }, i) =>
          createPage({
            path: node.fields.slug,
            component: resolve('src/templates/post.js'),
            context: {
              next: i === posts.length - 1 ? null : posts[i + 1].node,
              prev: i === 0 ? null : posts[i - 1].node,
              slug: node.fields.slug
            }
          })
        )
      // Create tag page and all corresponding term pages.
      const postsByTags = {}

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

      createPage({
        path: '/tags',
        component: resolve('src/templates/tags.js'),
        context: {
          tags: Object.entries(postsByTags)
        }
      })

      Object.keys(postsByTags).forEach(term => {
        createPage({
          path: `/tags/${term}`,
          component: resolve(`src/templates/term.js`),
          context: {
            taggedPosts: postsByTags[term],
            tag: term
          }
        })
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
