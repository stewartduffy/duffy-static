import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'

import './scss/global.base.scss'
import './index.global.scss'
// import styles from './index.css'

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ])
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired
  };

  render () {
    const {
      pkg
    } = this.context.metadata

    return (
      <div>
        <Helmet
          meta={[
            {
              name: 'generator', content: `${
              process.env.PHENOMIC_NAME} ${process.env.PHENOMIC_VERSION}`
            },
            { property: 'og:site_name', content: pkg.name },
            { name: 'twitter:site', content: `@${pkg.twitter}` }
          ]}
          script={[
            { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' }
          ]}
        />

        { /* meta viewport safari/chrome/edge */ }
        <Helmet
          meta={[ {
            name: 'viewport', content: 'width=device-width, initial-scale=1'
          } ]}
        />
        <style>{"@-ms-viewport { width: device-width; }"}</style>

        <Header />

        <div className="container main-container">
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}
