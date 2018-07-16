import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerServletEndpoints from './ServerServletEndpoints'

export const mapStateToProps = (state, ownProps) => {
  const servletId = ownProps.servletId
  const endpointId = ownProps.endpointId
  const endpoint = HelperRegistry.State.getServletServletEndpoint(state, servletId, endpointId)

  const props = {
    endpoint
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  const servletId = ownProps.servletId
  const endpointId = ownProps.endpointId
  return {
    onUpdateEndpoint: (endpoint) => {
      dispatch(ActionRegistry.updateServerServletEndpoint(servletId, endpointId, endpoint))
    },
    onDeleteEndpoint: (endpoint) => {
      dispatch(ActionRegistry.deleteServerServletEndpoint(servletId, endpointId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerServletEndpoints)
