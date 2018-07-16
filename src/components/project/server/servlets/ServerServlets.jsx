import React from 'react'
import PropTypes from 'prop-types'

import ServerServletContainer from './ServerServletContainer'

import './_server-servlets.scss'

class ServerServlets extends React.Component {
  constructor (...args) {
    super(args)

    this.buildServlet = this.buildServlet.bind(this)
  }
  /* RENDERING */

  buildServlet (servletId, index) {
    return <ServerServletContainer key={`server-servlet-${index}`} servletId={servletId} />
  }

  render () {
    return (
      <div className='server-servlets'>
        <h2>{'Server servlets'}</h2>
        { this.props.servlets.map(this.buildServlet)}
      </div>
    )
  }
}

ServerServlets.propTypes = {
  servlets: PropTypes.arrayOf(PropTypes.string.isRequired)
}

ServerServlets.defaultProps = {
  servlets: []
}

export default ServerServlets
