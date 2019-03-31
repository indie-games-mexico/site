import React from "react"

import Layout from "../layouts/es";
import SEO from "../components/common/seo"

const NotFoundPage = (props) => (
  <Layout location={ props.location }>
    <SEO title="404: No encontrado" />
    <h1>No Encontrado</h1>
    <p>El recurso que intenta acceder no existe</p>
  </Layout>
)

export default NotFoundPage
