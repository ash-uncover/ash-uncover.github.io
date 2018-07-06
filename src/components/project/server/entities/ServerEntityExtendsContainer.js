import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEntityExtends from './ServerEntityExtends'

export const mapStateToProps = (state, ownProps) => {
  const entity = HelperRegistry.State.getEntity(state, ownProps.entityId)
  const entityExtends = HelperRegistry.State.getEntityExtends(state, ownProps.entityId)
  const props = {
    entityId: ownProps.entityId,
    entityExtends: entityExtends,

    extends: HelperRegistry.State.getEntities(state).filter(e => {
      const isSelf = e.id === entity.id
      const isCollectionOk = !e.collection || e.collection === entity.collection
      const isInUse = entityExtends.indexOf(e.id) !== -1
      return !isSelf && isCollectionOk && !isInUse
    }).map(e => e.id)
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddEntityExtend: (extendId) => {
      dispatch(ActionRegistry.addServerEntityExtend(ownProps.entityId, extendId))
    },
    onRemoveEntityExtend: (extendId) => {
      dispatch(ActionRegistry.rmvServerEntityExtend(ownProps.entityId, extendId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerEntityExtends)
