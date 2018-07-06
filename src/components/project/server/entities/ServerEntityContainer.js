import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEntity from './ServerEntity'

export const mapStateToProps = (state, ownProps) => {
  const entity = HelperRegistry.State.getEntity(state, ownProps.entityId)
  const props = {
    entityId: entity.id,
    entityCollection: entity.collection,

    entities: HelperRegistry.State.getEntityIds(state),
    collections: HelperRegistry.State.getCollectionIds(state)
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeEntity: (entity) => {
      dispatch(ActionRegistry.updateServerEntity(ownProps.entityId, entity))
    },
    onDeleteEntity: () => {
      dispatch(ActionRegistry.deleteServerEntity(ownProps.entityId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerEntity)
