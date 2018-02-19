# [codybrunner.me](https://codybrunner.me) :fire: :sunglasses: :metal:

My personal website, portfolio, & tech blog.

[![CircleCI](https://img.shields.io/circleci/project/github/rockchalkwushock/how-to-open-source.svg?style=flat-square)](https://circleci.com/gh/rockchalkwushock/codybrunner.rocks)
[![Codecov](https://img.shields.io/codecov/c/github/rockchalkwushock/how-to-open-source.svg?style=flat-square)](https://codecov.io/gh/rockchalkwushock/codybrunner.rocks)

[![GatsbyJS](https://img.shields.io/badge/built%20with-gatsbyjs-9D7CBF.svg?style=flat-square)](https://gatsbyjs.org)
[![Now](https://img.shields.io/badge/deployed%20with-now--cli-orange.svg?style=flat-square)](https://github.com/zeit/now-cli)

[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Equimper](https://img.shields.io/badge/code%20style-equimper-blue.svg?style=flat-square)](https://github.com/EQuimper/eslint-config-equimper)
[![nps](https://img.shields.io/badge/scripts%20run%20with-nps-blue.svg?style=flat-square)](https://github.com/kentcdodds/nps)

## Notes to myself

1. PrismJS does not have support for `zsh` or `sh` must use `bash`. List [here](http://prismjs.com/#languages-list).
2. Payheed to the notes in `gatsby-node` they are there for a reason guy!
3. Look [here](https://using-remark.gatsbyjs.org/hello-world-kitchen-sink/) for markdown writing in Gatsby.
4. I can adjust properties on the embedded tweets, more [here](https://dev.twitter.com/web/embedded-tweets/parameters).
5. Generated favicons with `gatsby-plugin-favicons`. Should site-logo/icon change reinstall and add to `gatsby-config` then copy the files to `/static/`.
6. 404's are still not being used for static deployments on `now`, updates are coming to correct this. For now I could make my own server to serve the static assets & handle the 404 routing...easy to do..but I don't want to do that :joy:

## v2 features/wishlist

* [ ] Related Posts
* [ ] Projects
* [ ] Add [line highlighting](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#implementation-notes) to markdown code blocks
* [ ] Pagination for term pages will need to be implemented.
* [ ] Move from `prop-types` to `flowtypes`.
* [ ] Need to find a lazy loading method for certs & svgIcons to help performance issues. `gatsby-image` should be taking care of it for the `/certs` page. Might have something implemented wrong. svgIcons are regular `<img/>`.
