import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEndpoints from './ServerEndpoints'

export const mapStateToProps = (state, ownProps) => {
  const props = {
    endpoints: HelperRegistry.State.getEndpointIds(state)
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddEndpoint: (id) => {
      dispatch(ActionRegistry.createServerEndpoint(id))
    },
    onDeleteEndpoint: (id) => {
      dispatch(ActionRegistry.deleteServerEndpoint(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerEndpoints)
