import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { toggleDarkMode } from "../helpers"

const Header = ({ siteTitle }) => (
  <header
    className="site-header border-b"
    style={{
      marginBottom: `16px`,
    }}
  >
    <div
      style={{
        display: `flex`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="text-xl" style={{ margin: 0, flexGrow: 1 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <button
        id="dark-mode-toggle-button"
        aria-label="Toggle dark mode"
        className="dark-mode-toggle-button"
        onClick={toggleDarkMode}
        style={{ outline: "none" }}
      ></button>
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
