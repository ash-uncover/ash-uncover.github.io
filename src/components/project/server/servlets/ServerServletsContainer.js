import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerServlets from './ServerServlets'

export const mapStateToProps = (state, ownProps) => {
  const props = {
    servlets: HelperRegistry.State.getServletServletIds(state)
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateServlet: (id) => {
      dispatch(ActionRegistry.createServerServlet(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerServlets)
