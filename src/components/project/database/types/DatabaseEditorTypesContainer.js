import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import DatabaseEditorTypes from './DatabaseEditorTypes'

export const mapStateToProps = (state, ownProps) => {
  const props = {
    types: HelperRegistry.State.getTypeIds(state),
    allTypes: [].concat(HelperRegistry.State.getDataTypeIds(state)).concat(HelperRegistry.State.getTypeIds(state))
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddType: (id) => {
      dispatch(ActionRegistry.createDatabaseType(id))
    },
    onDeleteType: (id) => {
      dispatch(ActionRegistry.deleteDatabaseType(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseEditorTypes)
