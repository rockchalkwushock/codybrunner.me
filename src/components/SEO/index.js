import React from 'react'
import Helmet from 'react-helmet'

const SEO = ({ site }) => (
  <Helmet>
    {/* General Tags */}
    <html
      itemType="http://schema.org/WebSite"
      lang={site.lang}
      prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"
    />
    <meta name="author" content={site.author} />
    <meta name="description" content={site.description} />
    <meta name="keywords" content={site.keywords} />
    {process.env.NODE_ENV === 'production' ? (
      <base target="_blank" href={site.siteUrl} />
    ) : null}
    {/* Schema.org Tags */}
    <meta itemProp="name" content={site.title} />
    <meta itemProp="description" content={site.description} />
    <meta itemProp="keywords" content={site.keywords} />
    <meta itemProp="image" content={require('../../assets/logo.jpg')} />
    {/* OpenGraph Tags */}
    <meta property="og:title" content={site.title} />
    <meta property="og:description" content={site.description} />
    <meta property="og:image" content={require('../../assets/logo.jpg')} />
    <meta property="og:image:alt" content="Logo for codybrunner.me" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:height" content="300" />
    <meta property="og:image:width" content="400" />
    <meta property="og:url" content={site.siteUrl} />
    <meta property="og:site_name" content={site.title} />
    <meta property="og:locale" content={`${site.lang}_US`} />
    <meta property="og:type" content="website" />
    {/* Twitter Tags */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={site.twitter} />
    <meta name="twitter:title" content={site.title} />
    <meta name="twitter:description" content={site.description} />
    <meta name="twitter:image" content={require('../../assets/logo.jpg')} />
    <meta name="twitter:image:alt" content="Logo for codybrunner.me" />
    <meta name="twitter:url" content={site.siteUrl} />
    <title itemProp="name" lang={`${site.lang}_US`}>
      {site.title}
    </title>
  </Helmet>
)

export default SEO
