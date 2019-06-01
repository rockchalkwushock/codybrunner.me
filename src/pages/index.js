import React from "react"

import Layout from "../components/layout"
import About from '../components/About'
import Experience from '../components/Experience'
import Landing from '../components/Landing'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Experience />
  </Layout>
)

export default IndexPage
