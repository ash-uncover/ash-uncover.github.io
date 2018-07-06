import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEntityFields from './ServerEntityFields'

export const mapStateToProps = (state, ownProps) => {
  const entity = HelperRegistry.State.getEntity(state, ownProps.entityId)

  const entityFields = HelperRegistry.State.getEntityFields(state, ownProps.entityId)

  const parentFields = HelperRegistry.State.getEntityHeritedFields(state, ownProps.entityId)

  const props = {
    entityId: ownProps.entityId,
    entityFields,

    parentFields,

    fields: HelperRegistry.State.getCollectionFieldIds(state, entity.collection).filter(field => {
      return entityFields.indexOf(field) === -1 && parentFields.indexOf(field) === -1
    })
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddEntityField: (fieldId) => {
      dispatch(ActionRegistry.addServerEntityField(ownProps.entityId, fieldId))
    },
    onRemoveEntityField: (fieldId) => {
      dispatch(ActionRegistry.rmvServerEntityField(ownProps.entityId, fieldId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerEntityFields)
