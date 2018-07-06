import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import DatabaseEditorType from './DatabaseEditorType'

export const mapStateToProps = (state, ownProps) => {
  const props = {
    id: ownProps.id,
    types: [].concat(HelperRegistry.State.getDataTypeIds(state)).concat(HelperRegistry.State.getTypeIds(state)),
    values: HelperRegistry.State.getTypeValues(state, ownProps.id)
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeType: (id) => {
      dispatch(ActionRegistry.updateDatabaseType(ownProps.id, id))
    },
    onDeleteType: () => {
      dispatch(ActionRegistry.deleteDatabaseType(ownProps.id))
    },

    onChangeValue: (index, value) => {
      dispatch(ActionRegistry.updateDatabaseTypeValue(ownProps.id, index, value))
    },
    onAddValue: (value) => {
      dispatch(ActionRegistry.createDatabaseTypeValue(ownProps.id, value))
    },
    onDeleteValue: (value) => {
      dispatch(ActionRegistry.deleteDatabaseTypeValue(ownProps.id, value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseEditorType)
