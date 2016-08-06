import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import Svg from 'react-svg-inline'

import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGithubAlt from 'react-icons/lib/fa/github-alt'
import FaSkype from 'react-icons/lib/fa/skype'
import FaSpotify from 'react-icons/lib/fa/spotify'

import NavItem from '../NavItem/'
import logoSvg from '../icons/logo.svg'

import './global.index.scss'

export default class Header extends Component {
  static contextTypes = {
    metadata: PropTypes.object.isRequired
  };

  render () {
    return (
      <header className="header">
        <div className="heading-logo">
          <Svg svg={logoSvg} />
          <h1>Stewart Duffy / Front-End Developer</h1>
        </div>
        <div className="nav-container">
          <div className="container">

            <nav className="pull-left hidden-xs nav-container-icons">
              <Link className="nav-icon" to="http://nz.linkedin.com/in/stewartduffy/en">
                <FaLinkedin className="nav-icon-svg" />
              </Link>
              <Link className="nav-icon" to="https://twitter.com/sbf_duffy">
                <FaTwitter className="nav-icon-svg" />
              </Link>
              <Link className="nav-icon" to="http://github.com/stewartduffy">
                <FaGithubAlt className="nav-icon-svg" />
              </Link>
              <Link className="nav-icon" to="skype:stewart.duffy">
                <FaSkype className="nav-icon-svg" />
              </Link>
              <Link className="nav-icon" to="https://open.spotify.com/user/1143680138">
                <FaSpotify className="nav-icon-svg" />
              </Link>
            </nav>

            <nav className="pull-right hidden-xs">
              <NavItem active url="/" text="about" />
              <NavItem url="#contact" text="contact" />
              <NavItem url="/downloads/stewart_duffy_cv.pdf" text="cv" />
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
