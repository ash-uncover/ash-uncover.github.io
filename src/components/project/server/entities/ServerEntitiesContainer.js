import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEntities from './ServerEntities'

export const mapStateToProps = (state, ownProps) => {
    const props = {
        entities: HelperRegistry.State.getEntityIds(state)
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddEntity: (id) => {
            dispatch(ActionRegistry.createServerEntity(id))
        },
        onDeleteEntity: (id) => {
            dispatch(ActionRegistry.deleteServerEntity(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerEntities)
