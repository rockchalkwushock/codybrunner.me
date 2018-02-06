# codybrunner.rocks

## Notes to myself

1. PrismJS does not have support for `zsh` must use `bash`. List [here](http://prismjs.com/#languages-list).
2. Payheed to the notes in `gatsby-node` they are there for a reason guy!
3. Look [here](https://using-remark.gatsbyjs.org/hello-world-kitchen-sink/) for markdown writing in Gatsby.
4. I can adjust properties on the embedded tweets, more [here](https://dev.twitter.com/web/embedded-tweets/parameters).

## Left todo for v1

* [x] Images in SEO
* [x] Finalize styling of site & clean up `theme.js` & theme across site.
* [x] Proofread posts, write up newest post.
* [ ] Update Resume in Dropbox & link on HomePage
* [ ] Finalize updates to LinkedIn
* [x] Remove Tags page and find a different way to supply _all_ tags.
* [ ] Clean up tags

## Perf

* [ ] Add `webpack-bundle-analyzer` and get baseline.
* [x] Add`preact` -- Problems :cry: `Cannot read property 'pathname' of undefined`
* [x] Add `offline`
* [x] Customize `fontawesome` to cut down on bloat.
* [x] `google-fonts` plugin or get static assets.
* [ ] Check perf of image in CSS vs using `gatsby-image`.
* [ ] Look at imports of `react-share`.

## Browser Troubleshooting

1. Tags in Card are not displaying correclty in Safari on Mobile.

## v2 features/wishlist

* [ ] Related Posts
* [ ] Projects
* [ ] Certifications
* [ ] Work more with `sharp`, `gatsby-image`. [Here](https://image-processing.gatsbyjs.org/) for more info.
* [ ] Add [line highlighting](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#implementation-notes) to markdown code blocks
* [ ] Pagination for tags, not really needed at the moment but it should be implemented and will be easys
* [ ] Should really move to using `gatsby-image` for avatar on homepage. It will be more performant and the out of the box lazy-loading with blur up will be a better UX. At the moment importing the image into `js` & letting `webpack` do work loads 238KB :scream:
