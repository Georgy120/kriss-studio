import React from "react"
import ComingSoon from "../components/CommingSoon"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ComingSoon />
  </Layout>
)

export default IndexPage
