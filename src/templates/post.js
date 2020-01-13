import React from 'react'
import Layout from "../components/layout"

export default ({ pageContext: { title, content }}) => (
  <Layout>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{__html: content }} />
  </Layout>
)