import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerServletEndpoints from './ServerServletEndpoints'

export const mapStateToProps = (state, ownProps) => {
  const servletId = ownProps.servletId
  const props = {
    endpoints: HelperRegistry.State.getServletServletEndpointIds(state, servletId)
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  const servletId = ownProps.servletId
  return {
    onCreateEndpoint: (endpoint) => {
      dispatch(ActionRegistry.createServerServletEndpoint(servletId, endpoint))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerServletEndpoints)
