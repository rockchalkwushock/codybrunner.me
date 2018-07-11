import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            author
            description
            googleVerify
            keywords
            lang
            siteUrl
            title
            twitter
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        {/* General Tags */}
        <html
          itemType="http://schema.org/WebSite"
          lang={data.site.siteMetadata.lang}
          prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"
        />
        <meta name="author" content={data.site.siteMetadata.author} />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        {process.env.NODE_ENV === 'production' ? (
          <base target="_blank" href={data.site.siteMetadata.siteUrl} />
        ) : null}
        {/* Schema.org Tags */}
        <meta itemProp="name" content={data.site.siteMetadata.title} />
        <meta
          itemProp="description"
          content={data.site.siteMetadata.description}
        />
        <meta itemProp="keywords" content={data.site.siteMetadata.keywords} />
        <meta itemProp="image" content={require('../../assets/logo.jpg')} />
        {/* OpenGraph Tags */}
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:image" content={require('../../assets/logo.jpg')} />
        <meta property="og:image:alt" content="Logo for codybrunner.me" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:width" content="400" />
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta
          property="og:locale"
          content={`${data.site.siteMetadata.lang}_US`}
        />
        <meta property="og:type" content="website" />
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={data.site.siteMetadata.twitter} />
        <meta name="twitter:title" content={data.site.siteMetadata.title} />
        <meta
          name="twitter:description"
          content={data.site.siteMetadata.description}
        />
        <meta name="twitter:image" content={require('../../assets/logo.jpg')} />
        <meta name="twitter:image:alt" content="Logo for codybrunner.me" />
        <meta name="twitter:url" content={data.site.siteMetadata.siteUrl} />
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content={data.site.siteMetadata.googleVerify}
        />
        <title itemProp="name" lang={`${data.site.siteMetadata.lang}_US`}>
          {data.site.siteMetadata.title}
        </title>
      </Helmet>
    )}
  />
)
