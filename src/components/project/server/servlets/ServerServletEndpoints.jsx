import React from 'react'
import PropTypes from 'prop-types'

import ServerServletEndpointContainer from './ServerServletEndpointContainer'

import './_server-servlets.scss'

class ServerServletEndpoints extends React.Component {
  constructor (...args) {
    super(args)

    this.buildEndpoint = this.buildEndpoint.bind(this)
  }

  /* RENDERING */

  buildEndpoint (endpointId, index) {
    return <ServerServletEndpointContainer key={`server-servlet-endpoint-${index}`} />
  }

  render () {
    return (
      <div className='server-servlet-endpoints'>
        <h3>{'Endpoints'}</h3>
        { this.props.endpoints.map(this.buildEndpoint)}
      </div>
    )
  }
}

ServerServletEndpoints.propTypes = {
  endpoints: PropTypes.arrayOf(PropTypes.string.isRequired)
}

ServerServletEndpoints.defaultProps = {
  endpoints: []
}

export default ServerServletEndpoints
