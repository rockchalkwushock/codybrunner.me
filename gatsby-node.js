// Navtive
const { resolve } = require('path')

// Package
const { createFilePath } = require('gatsby-source-filesystem')

// Condition
const isProd = process.env.NODE_ENV === 'production'

// Look up params for GraphQL Query (dev vs prod).
const args = isProd
  ? 'filter: { frontmatter: { draft: { ne: true } } } sort: { order: ASC, fields: [frontmatter___date] }'
  : 'sort: { order: ASC, fields: [frontmatter___date] }'

const createHomePage = (createPage, posts) => {
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
}

const createAboutPage = (createPage, posts) => {
  createPage({
    path: '/about',
    component: resolve('src/templates/about.js'),
    context: {
      content: posts.filter(({ node }) => node.fields.slug === '/about/')
    }
  })
}

const createBlogPageAndPostsPages = (createPage, posts) => {
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
}

const createTagsPageAndTermPages = (createPage, posts) => {
  // Create an empty object to store the posts.
  const postsByTags = {}
  // Loop through all nodes (our markdown posts) and add the tags to our post object.
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

  // Create the tags page with the list of tags from our posts object.
  createPage({
    path: '/tags',
    component: resolve('src/templates/tags.js'),
    context: {
      tags: Object.entries(postsByTags)
    }
  })

  // For each of the tags in the post object, create a tag page.
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
}

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
      createHomePage(createPage, posts)
      // Create about page.
      createAboutPage(createPage, posts)
      // Create blog page and all corresponding posts.
      createBlogPageAndPostsPages(createPage, posts)
      // Create tag page and all corresponding term pages.
      createTagsPageAndTermPages(createPage, posts)
      _resolve()
    })
  })
}

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
