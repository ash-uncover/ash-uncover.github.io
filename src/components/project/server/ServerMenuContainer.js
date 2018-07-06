import { connect } from 'react-redux'
import ActionRegistry from 'core/ActionRegistry'
import ServerMenu from './ServerMenu'

import HelperRegistry from '../../../core/HelperRegistry'

export const mapStateToProps = (state, ownProps) => {
  const props = {
    entities: HelperRegistry.State.getEntityIds(state)
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNavigate: (link) => {
      dispatch(ActionRegistry.appNavigate(link))
    }
  }
}

const ServerMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerMenu)

export default ServerMenuContainer
