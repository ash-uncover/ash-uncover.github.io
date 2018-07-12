import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import ServerEntityCustom from './ServerEntityCustom'

export const mapStateToProps = (state, ownProps) => {
  const entityId = ownProps.entityId
  const customId = ownProps.customId
  const custom = HelperRegistry.State.getEntityCustom(state, entityId, customId)

  const props = {
    entityId,
    customId,
    customType: custom.type,

    idRestrictions: HelperRegistry.State.getEntityEffectiveFields(state, entityId),
    typeRestrictions: []
      .concat(HelperRegistry.State.getDataTypeIds(state))
      .concat(HelperRegistry.State.getTypeIds(state))
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  const entityId = ownProps.entityId
  const customId = ownProps.customId
  return {
    onUpdate: (custom) => {
      dispatch(ActionRegistry.updateServerEntityCustom(entityId, customId, custom))
    },
    onDelete: () => {
      dispatch(ActionRegistry.deleteServerEntityCustom(entityId, customId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerEntityCustom)
