/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `3rem 1.0875rem 1.45rem`,

        }}
      >
        <main>{children}</main>
      </div>
      <footer style={{
        background: `maroon`,
        width: `100%`,
        color: `gold`,
        textAlign: `center`,
        height: `2.5rem`,
        padding: `0.5rem`,
        position: `relative`,
      }}>
        By <a href="https://github.com/sorata3042" target="_blank" rel="noopener">Steven Chau</a>
        , Built with
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noopener">Gatsby</a> © {new Date().getFullYear()}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
