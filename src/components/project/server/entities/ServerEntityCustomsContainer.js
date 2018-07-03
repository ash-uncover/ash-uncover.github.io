import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEntityCustoms from './ServerEntityCustoms'

export const mapStateToProps = (state, ownProps) => {
    const entityId = ownProps.entityId
    const entity = HelperRegistry.State.getEntity(state, entityId)
    
    const entityCustoms = HelperRegistry.State.getEntityCustoms(state, entityId)
    const parentCustoms = HelperRegistry.State.getEntityHeritedCustoms(state, entityId)

    let fieldRestrictions = []
    if (entity.collection) {
        fieldRestrictions = fieldRestrictions.concat(HelperRegistry.State.getCollectionFieldIds(state, entity.collection))
    }
    fieldRestrictions = fieldRestrictions.concat(HelperRegistry.State.getEntityEffectiveFields(state, entityId))

    const props = {
        entityId,
        entityCustoms,
        parentCustoms,

        fieldRestrictions
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCreateCustom: (customId) => {
            dispatch(ActionRegistry.createServerEntityCustom(ownProps.entityId, customId))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerEntityCustoms)
