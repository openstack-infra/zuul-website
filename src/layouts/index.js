import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import "font-awesome/css/font-awesome.css"
import "./main.css"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Zuul: A project gating system" />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
