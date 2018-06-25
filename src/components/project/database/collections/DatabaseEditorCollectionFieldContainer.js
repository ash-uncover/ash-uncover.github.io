import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import DatabaseEditorCollectionField from './DatabaseEditorCollectionField'

export const mapStateToProps = (state, ownProps) => {
    const field = HelperRegistry.State.getCollectionField(state, ownProps.collectionId, ownProps.fieldId)
    const props = {
        collectionId: ownProps.collectionId,
        
        fieldId: ownProps.fieldId,
        fieldType: field.type,
        fieldIsArray: field.isArray,

        fieldTypes: [].concat(HelperRegistry.State.getDataTypeIds(state)).concat(HelperRegistry.State.getTypeIds(state)),
        
        fields: HelperRegistry.State.getCollectionFieldIds(state, ownProps.collectionId)
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeField: (field) => {
        dispatch(ActionRegistry.updateDatabaseCollectionField(ownProps.collectionId, ownProps.fieldId, field))
    },
    onDeleteField: () => {
        dispatch(ActionRegistry.deleteDatabaseCollectionField(ownProps.collectionId, ownProps.fieldId))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DatabaseEditorCollectionField)
