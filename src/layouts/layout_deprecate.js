/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../common/header"
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({ type, children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            languages {
              langs
              defaultLangKey
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header {...data.site.siteMetadata }  />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()},
            {` `}
            Indie Games Mexico
          </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired
}

export default Layout
