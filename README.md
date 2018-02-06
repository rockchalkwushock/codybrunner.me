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
* [ ] Remove Tags page and find a different way to supply _all_ tags.

## Perf

* [ ] Add `webpack-bundle-analyzer` and get baseline.
* [x] Add`preact` -- Problems :cry: `Cannot read property 'pathname' of undefined`
* [x] Add `offline`
* [x] Customize `fontawesome` to cut down on bloat.
* [x] `google-fonts` plugin or get static assets.
* [ ] Check perf of image in CSS vs using `gatsby-image`.
* [ ] Look at imports of `react-share`.

## v2

* [ ] Related Posts
* [ ] Projects
* [ ] Certifications
* [ ] Work more with `sharp`, `gatsby-image`. [Here](https://image-processing.gatsbyjs.org/) for more info.
* [ ] Add [line highlighting](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#implementation-notes) to markdown code blocks
* [ ] Pagination for tags, not really needed at the moment but it should be implemented and will be easys

## LinkedIn Badge

```html
<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="cody-brunner"><a class="LI-simple-link" href='https://www.linkedin.com/in/cody-brunner?trk=profile-badge'>Cody Brunner</a></div>
<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
```
