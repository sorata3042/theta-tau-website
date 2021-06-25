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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div class="navbar" id="mynavbar"
            style={{
            margin: `0 auto`,
            maxWidth: 1080,
            padding: `0`,
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

            <a href="https://cbu0.sharepoint.com/sites/ttomegadelta" target="_blank" rel="noopener"> Sharepoint</a>
            <a href="/contact">Contact Us</a>
            <a href="/members">Members</a>
            <a href="/officers">Officers</a>
            <a href="/about">About</a>
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
