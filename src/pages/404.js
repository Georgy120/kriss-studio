import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/CommingSoon/ComingSoon.css"

const NotFoundPage = () => (
  <Layout>
    <div className="coming-container">
    <SEO title="404: Not found" />
    <h1>UPS! Coś poszło nie tak</h1>
    </div>
  </Layout>
)

export default NotFoundPage
