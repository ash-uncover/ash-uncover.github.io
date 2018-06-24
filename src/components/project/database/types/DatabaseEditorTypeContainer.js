import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import DatabaseEditorType from './DatabaseEditorType'

export const mapStateToProps = (state, ownProps) => {
    const props = {
        id: ownProps.id,
        types: state.model.project.database.types.map(type => type.id),
        values: state.model.project.database.types.find(type => type.id === ownProps.id).values
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
