const {
  devOnly,
  domain,
  gatsbyVersion,
  isProd,
  plugins,
  prodOnly,
  styledVersion,
  year
} = require('./config')

module.exports = {
  pathPrefix: '/',
  plugins: isProd ? [...plugins, ...prodOnly] : [...plugins, ...devOnly],
  siteMetadata: {
    aboutSnippet:
      'Cody Brunner is a full-stack JavaScript developer & Navy Veteran residing in Wichita, Kansas. Cody primarily works with Node, React, & GraphQL. When not writing code he loves to go hiking, play with his dog & niece, and watch his Jayhawks win!',
    author: 'Cody Brunner',
    business: [
      {
        className: 'fas, envelope',
        href: 'mailto:rockchalkwushock@icloud.com',
        label: 'Email'
      },
      {
        className: 'fab, telegram-plane',
        href: 'https://t.me/rockchalkwushock',
        label: 'Telegram'
      },
      {
        className: 'fas, file-pdf',
        href:
          'https://www.dropbox.com/s/3tv6h9nbbiwksd7/Cody%20Brunner%20Resume.pdf?dl=1',
        label: 'Resume'
      }
    ],
    contacts: [
      {
        className: 'fab, github',
        href: 'https://github.com/rockchalkwushock',
        label: 'Github'
      },
      {
        className: 'fab, instagram',
        href: 'https://www.instagram.com/rockchalkwushock',
        label: 'Instagram'
      },
      {
        className: 'fab, linkedin',
        href: 'https://www.linkedin.com/in/cody-brunner',
        label: 'LinkedIn'
      },
      {
        className: 'fab, medium',
        href: 'https://medium.com/@RockChalkDev',
        label: 'Medium'
      },
      {
        className: 'fas, rss',
        href: 'rss.xml',
        label: 'RSS Feed'
      },
      {
        className: 'fab, twitter',
        href: 'https://twitter.com/RockChalkDev',
        label: 'Twitter'
      },
      {
        className: 'fab, youtube',
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
    lang: 'en',
    links: {
      creativeCommons: {
        href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
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
      { id: 3, href: '/posts/1', text: 'Blog' }, // '/posts/1' is from using `gatsby-paginate`
      { id: 4, href: '/certs', text: 'Certifications' }
    ],
    tech:
      'The below are just some of the technologies I know and tooling I use frequently.',
    title: 'Cody Brunner - Full-Stack JavaScript Developer',
    twitter: '@RockChalkDev',
    siteUrl: `${domain}`
  }
}
