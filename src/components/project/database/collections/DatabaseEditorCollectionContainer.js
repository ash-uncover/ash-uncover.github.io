import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import DatabaseEditorCollection from './DatabaseEditorCollection'

export const mapStateToProps = (state, ownProps) => {
    const props = {
        collectionId: ownProps.id,
        collectionFields: HelperRegistry.State.getCollectionFieldIds(state, ownProps.id),
        
        collections: HelperRegistry.State.getCollectionIds(state)
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeCollection: (collection) => {
        dispatch(ActionRegistry.updateDatabaseCollection(ownProps.id, collection))
    },
    onDeleteCollection: () => {
        dispatch(ActionRegistry.deleteDatabaseCollection(ownProps.id))
    },

    onAddField: (field) => {
        dispatch(ActionRegistry.createDatabaseCollectionField(ownProps.id, field))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DatabaseEditorCollection)
