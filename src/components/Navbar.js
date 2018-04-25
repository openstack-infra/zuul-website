import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <figure className="image">
          <img src={logo} alt="Zuul" />
        </figure>
      </Link>
      <div className="navbar-burger burger" data-target="zuulNavBar">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div id="zuulNavBar" className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link" to="/docs">
            Docs
          </Link>
          <div className="navbar-dropdown is-boxed">
             <a href="https://zuul-ci.org/docs/zuul/" className="navbar-item">Zuul</a>
             <a href="https://zuul-ci.org/docs/nodepool/" className="navbar-item">Nodepool</a>
             <a href="https://zuul-ci.org/docs/zuul-jobs/" className="navbar-item">Zuul Jobs</a>
             <a href="https://zuul-ci.org/docs/zuul-base-jobs/" className="navbar-item">Base Jobs</a>
          </div>
        </div>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
    </div>
    <div className="navbar-end">
    </div>
  </nav>
)

export default Navbar
