import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import DatabaseEditorCollections from './DatabaseEditorCollections'

export const mapStateToProps = (state, ownProps) => {
  const props = {
    collections: HelperRegistry.State.getCollectionIds(state)
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddCollection: (id) => {
      dispatch(ActionRegistry.createDatabaseCollection(id))
    },
    onDeleteCollection: (id) => {
      dispatch(ActionRegistry.deleteDatabaseCollection(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseEditorCollections)
