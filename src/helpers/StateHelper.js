import HelperRegistry from 'core/HelperRegistry'

export class StateHelper {
  /* DATA */

  /* DATA TYPES */

  getDataTypes (state) {
    return state.data.types.sort((t1, t2) => t1.id.localeCompare(t2.id))
  }
  getDataTypeIds (state) {
    return this.getDataTypes(state).map((t) => t.id)
  }

  /* DATABASE */

  /* TYPES */

  getTypes (state) {
    return state.model.project.database.types.sort((t1, t2) => t1.id.localeCompare(t2.id))
  }
  getTypeIds (state) {
    return this.getTypes(state).map(t => t.id)
  }
  getType (state, typeId) {
    return this.getTypes(state).find(t => t.id === typeId)
  }
  getTypeIndex (state, typeId) {
    return this.getTypes(state).findIndex(t => t.id === typeId)
  }

  /* TYPE VALUES */

  getTypeValues (state, typeId) {
    return this.getType(state, typeId).values
  }

  /* COLLECTIONS */

  getCollections (state) {
    return state.model.project.database.collections.sort((c1, c2) => c1.id.localeCompare(c2.id))
  }
  getCollectionIds (state) {
    return this.getCollections(state).map(c => c.id)
  }
  getCollection (state, collectionId) {
    return this.getCollections(state).find(c => c.id === collectionId)
  }
  getCollectionIndex (state, collectionId) {
    return this.getCollections(state).findIndex(c => c.id === collectionId)
  }

  /* COLLECTION FIELDS */

  getCollectionFields (state, collectionId) {
    return this.getCollection(state, collectionId).fields.sort((f1, f2) => f1.id.localeCompare(f2.id))
  }
  getCollectionFieldIds (state, collectionId) {
    return this.getCollectionFields(state, collectionId).map(f => f.id)
  }
  getCollectionField (state, collectionId, fieldId) {
    return this.getCollectionFields(state, collectionId).find(f => f.id === fieldId)
  }
  getCollectionFieldIndex (state, collectionId, fieldId) {
    return this.getCollectionFields(state, collectionId).findIndex(f => f.id === fieldId)
  }

  /* SERVER */

  /* ENTITIES */

  getEntities (state) {
    return state.model.project.server.entities.sort((e1, e2) => e1.id.localeCompare(e2.id))
  }
  getEntityIds (state) {
    return this.getEntities(state).map(e => e.id)
  }
  getEntity (state, entityId) {
    return this.getEntities(state).find(c => c.id === entityId)
  }
  getEntityIndex (state, entityId) {
    return this.getEntities(state).findIndex(c => c.id === entityId)
  }

  checkEntity (state, entityId) {
    const entity = this.getEntity(state, entityId)
    entity.extends = entity.extends.filter(state, entityId).filter(extend => {
      const ent = this.getEntity(state, extend)
      return !ent.collection || ent.collection === extend
    })
    entity.fields = entity.fields.filter(field => {
      return true
    })
  }

  /* ENTITY EXTENDS */

  getEntityExtends (state, entityId) {
    const entity = this.getEntity(state, entityId)
    return entity.extends.sort((e1, e2) => e1.localeCompare(e2))
  }

  /* ENTITY EXTENDS */

  getEntityFields (state, entityId) {
    const entity = this.getEntity(state, entityId)
    return entity.fields.sort((f1, f2) => f1.localeCompare(f2))
  }

  /* ENTITY CUSTOMS */

  getEntityCustoms (state, entityId) {
    const entity = this.getEntity(state, entityId)
    return entity.customs.sort((c1, c2) => c1.id.localeCompare(c2.id))
  }
  getEntityCustomIds (state, entityId) {
    const customs = this.getEntityCustoms(state, entityId)
    return customs.map(f => f.id)
  }
  getEntityCustom (state, entityId, customId) {
    const customs = this.getEntityCustoms(state, entityId)
    return customs.find(f => f.id === customId)
  }
  getEntityCustomIndex (state, entityId, customId) {
    const customs = this.getEntityCustoms(state, entityId)
    return customs.findIndex(f => f.id === customId)
  }

  /* ENTITY GLOBAL */

  getEntityEffectiveFields (state, entityId) {
    return []
      .concat(this.getEntityFields(state, entityId))
      .concat(this.getEntityCustomIds(state, entityId))
      .concat(this.getEntityHeritedFields(state, entityId))
      .concat(this.getEntityHeritedCustoms(state, entityId))
  }

  getEntityHeritedFields (state, entityId) {
    return this.getEntityExtends(state, entityId).reduce((result, extend) => {
      return result
        .concat(this.getEntityFields(state, extend))
        .concat(this.getEntityHeritedFields(state, extend))
    }, [])
  }

  getEntityHeritedCustoms (state, entityId) {
    return this.getEntityExtends(state, entityId).reduce((result, extend) => {
      return result
        .concat(this.getEntityCustomIds(state, extend))
        .concat(this.getEntityHeritedCustoms(state, extend))
    }, [])
  }
}

const Helper = new StateHelper()

HelperRegistry.register(Helper, 'State')

export default Helper
