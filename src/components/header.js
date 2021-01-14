import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      borderBottom: `2px solid maroon`
    }}
  >
    <div class = "navbar"
      style={{
        margin: `0 auto`,
        maxWidth: 1080,
        padding: `0.5rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <b>{siteTitle}</b>
      </Link>
      <a href="https://cbu0.sharepoint.com/sites/ttomegadelta" target="_blank"> Sharepoint</a>
      <a href="/contact">Contact Us</a>
      <a href="/rush">Rush</a>
      <a href="/members">Members</a>
      <a href="/officers">Officers</a>
      <a href="/about">About</a>
    </div>
    <div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
