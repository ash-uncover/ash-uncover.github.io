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
      <div className='server-servlet'>
        <h2>{'Servlet'}</h2>
      </div>
    )
  }
}

ServerServlets.propTypes = {
  servletId: PropTypes.string.isRequired,
  servlet: PropTypes.object
}

ServerServlets.defaultProps = {
  servlet: {}
}

export default ServerServlets
