import { connect } from 'react-redux'
import ActionRegistry from 'core/ActionRegistry'
import DatabaseMenu from './DatabaseMenu'

import HelperRegistry from '../../../core/HelperRegistry'

export const mapStateToProps = (state, ownProps) => {
  const props = {
    types: HelperRegistry.State.getTypeIds(state),
    collections: HelperRegistry.State.getCollectionIds(state)
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

const DatabaseMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseMenu)

export default DatabaseMenuContainer
