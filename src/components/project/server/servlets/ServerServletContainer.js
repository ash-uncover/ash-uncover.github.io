import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerServlet from './ServerServlet'

export const mapStateToProps = (state, ownProps) => {
  const servletId = ownProps.servletId
  const servlet = HelperRegistry.State.getServlet(state, servletId)

  const props = {
    servletId,
    servletColle  ctionId: servlet.collectionId
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  const servletId = ownProps.servletId
  return {
    onChangeServlet: (servlet) => {
      dispatch(ActionRegistry.updateServerServlet(servletId, servlet))
    },
    onDeleteServlet: () => {
      dispatch(ActionRegistry.deleteServerServlet(servletId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerServlet)
