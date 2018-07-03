import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEntityField from './ServerEntityCustom'

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
        onUpdateEntityCustom: (customId, custom) => {
            dispatch(ActionRegistry.updateServerEntityCustom(ownProps.entityId, customId, custom))
        },
        onDeleteEntityCustom: (customId) => {
            dispatch(ActionRegistry.deleteServerEntityCustom(ownProps.entityId, customId))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerEntityField)
