import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'

import DatabaseEditorCollections from './DatabaseEditorCollections'

export const mapStateToProps = (state, ownProps) => {
    const props = {
        collections: state.model.project.database.collections.map(collection => collection.id)
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
