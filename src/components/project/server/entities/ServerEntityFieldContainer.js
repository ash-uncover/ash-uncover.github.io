import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEntityField from './ServerEntityField'

export const mapStateToProps = (state, ownProps) => {
    const props = {
        entityId: ownProps.entityId,
        fieldId: ownProps.fieldId,
        
        fields: []
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeField: (field) => {
            dispatch(ActionRegistry.updateServerEntityField(
                ownProps.entityId, 
                ownProps.fieldId,
                field
            ))
        },
        onDeleteField: () => {
            dispatch(ActionRegistry.deleteServerEntityField(
                ownProps.entityId,
                ownProps.fieldId
            ))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerEntityField)
