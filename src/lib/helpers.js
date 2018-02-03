/**
 *
 * @function mergeStrings
 *
 * @param {String} str1 - site.keywords
 * @param {String} str2 - post.frontmatter.keywords
 *
 * @returns {String}
 *
 * NOTE: check if str2 is null, throws error in production build.
 */
export const mergeStrings = (str1, str2) =>
  str2 ? [...str1.split(', '), ...str2.split(', ')].join(', ') : str1
