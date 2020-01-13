import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

export default ({ pageContext: { posts }}) => (
  <Layout>
    <h1>My Prisma Blog</h1>
    {posts.map(({ id, title, content }) => (
      <div style={{
        marginBottom: 20,
      }}>
        <Link to={id}>
          <h2>{title}</h2>
        </Link>
        <div dangerouslySetInnerHTML={{__html: content }} />
      </div>
    ))}
  </Layout>
)