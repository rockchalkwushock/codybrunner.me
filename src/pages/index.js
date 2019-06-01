import React from "react"

import Layout from "../components/layout"
import About from '../components/About'
import Experience from '../components/Experience'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Experience />
  </Layout>
)

export default IndexPage
