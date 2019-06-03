import React from "react"

import Layout from "../components/layout"
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Experience />
    <Education />
    <Projects />
    <Skills />
  </Layout>
)

export default IndexPage
