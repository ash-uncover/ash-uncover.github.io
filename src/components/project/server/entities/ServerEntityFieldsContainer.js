import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEntityFields from './ServerEntityFields'

export const mapStateToProps = (state, ownProps) => {
    const props = {
        entityId: ownProps.entityId,
        fields: HelperRegistry.State.getEntityFieldIds(state, ownProps.entityId)
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddField: (fieldId) => {
            dispatch(ActionRegistry.createServerEntityField(ownProps.entityId, fieldId))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerEntityFields)
