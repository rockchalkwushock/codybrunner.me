/**
 *
 * @function mergeStrings
 *
 * @param {String} str1 - site.keywords
 * @param {String} str2 - post.frontmatter.keywords
 *
 * @description
 * Takes in two strings & merges them into one. Should
 * second string not be provided return first string.
 *
 * @example
 * const str = mergeString('hello, world, peanuts', 'Jayhawks, JavaScript, beer')
 * console.log(str) // 'hello, world, peanuts, Jayhawks, JavaScript, beer'
 *
 * @returns {String}
 *
 */
export const mergeStrings = (str1, str2) =>
  str2 ? [...str1.split(', '), ...str2.split(', ')].join(', ') : str1

/**
 * @function sortedTags
 *
 * @param {Array<Array>} tags [[term, termPosts], ...]
 * @param {Object} React Component
 *
 * @description
 * Maps over the array & deconstruct the
 * index(array) into the term & the termsPosts. Spreads
 * out the keys of the Component & updates with the
 * required props. Sorts the array of components to
 * return ordered by most to least posts/term.
 *
 * @example
 * sortedTags(tags, <Tag />) => (
 *  ...,
 *  <Tag key="React" sortkey=4 to="/tags/react">React--(4)</Tag>,
 *  ...
 * )
 *
 * @returns {Array<Object>} Array of sorted Components with their data.
 */
export const sortedTags = (tags, Component) =>
  tags
    .map(([term, termPosts]) => ({
      ...Component,
      key: term,
      props: {
        children: `${term.toLowerCase()}  (${termPosts.length})`,
        sortkey: termPosts.length,
        to: `/tags/${term.toLowerCase()}`
      }
    }))
    .sort((a, b) => a.props.sortkey < b.props.sortkey)
