import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEntity from './ServerEntity'

export const mapStateToProps = (state, ownProps) => {
    const props = {
        entityId: ownProps.id,
        
        entities: HelperRegistry.State.getEntityIds(state)
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeEntity: (id) => {
            dispatch(ActionRegistry.updateServerEntity(ownProps.id, id))
        },
        onDeleteEntity: () => {
            dispatch(ActionRegistry.deleteServerEntity(ownProps.id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerEntity)
