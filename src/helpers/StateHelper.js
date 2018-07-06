import HelperRegistry from 'core/HelperRegistry'

export class StateHelper {

    constructor () {
    }

    /* ******** *
     *   DATA
     * ******** */

    /* DATA TYPES */

    getDataTypes(state) {
        return state.data.types
    }
    getDataTypeIds(state) {
        return this.getDataTypes(state).map(t => t.id)
    }


    /* ************ *
     *   DATABASE
     * ************ */

    /* TYPES */

    getTypes(state) {
        return state.model.project.database.types
    }
    getTypeIds(state) {
        return this.getTypes(state).map(t => t.id)
    }
    getType(state, typeId) {
        return state.model.project.database.types.find(t => t.id === typeId)
    }
    getTypeIndex(state, typeId) {
        return state.model.project.database.types.findIndex(t => t.id === typeId)
    }

    /* TYPE VALUES */

    getTypeValues(state, typeId) {
        return this.getType(state, typeId).values
    }

    /* COLLECTIONS */

    getCollections(state) {
        return state.model.project.database.collections
    }
    getCollectionIds(state) {
        return this.getCollections(state).map(c => c.id)
    }
    getCollection(state, collectionId) {
        return this.getCollections(state).find(c => c.id === collectionId)
    }
    getCollectionIndex(state, collectionId) {
        return this.getCollections(state).findIndex(c => c.id === collectionId)
    }

    /* COLLECTION FIELDS */

    getCollectionFields(state, collectionId) {
        return this.getCollection(state, collectionId).fields
    }
    getCollectionFieldIds(state, collectionId) {
        return this.getCollectionFields(state, collectionId).map(f => f.id)
    }
    getCollectionField(state, collectionId, fieldId) {
        return this.getCollectionFields(state, collectionId).find(f => f.id === fieldId)
    }
    getCollectionFieldIndex(state, collectionId, fieldId) {
        return this.getCollectionFields(state, collectionId).findIndex(f => f.id === fieldId)
    }


    /* ********** *
     *   SERVER
     * ********** */

    /* ENTITIES */

    getEntities(state) {
        return state.model.project.server.entities
    }
    getEntityIds(state) {
        return this.getEntities(state).map(e => e.id)
    }
    getEntity(state, entityId) {
        return this.getEntities(state).find(c => c.id === entityId)
    }
    getEntityIndex(state, entityId) {
        return this.getEntities(state).findIndex(c => c.id === entityId)
    }

    checkEntity(state, entityId) {
        const entity = getEntity(state, entityId)
        const collection = this.getCollection(state)
        entity.extends = entity.extends.filter(state, entityId).filter(extend => {
            const ent = this.getEntity(state, extend)
            return !ent.collection ||  ent.collection === extend
        })
        entity.fields = entity.fields.filter(field => {
            return true
        })
    }

    /* ENTITY EXTENDS */

    getEntityExtends(state, entityId) {
        return this.getEntity(state, entityId).extends || []
    }

    /* ENTITY EXTENDS */

    getEntityFields(state, entityId) {
        return this.getEntity(state, entityId).fields || []
    }

    /* ENTITY CUSTOMS */

    getEntityCustoms(state, entityId) {
        const entity = this.getEntity(state, entityId)
        return entity.customs
    }
    getEntityCustomIds(state, entityId) {
        const customs = this.getEntityCustoms(state, entityId)
        return customs.map(f => f.id)
    }
    getEntityCustom(state, entityId, customId) {
        const customs = this.getEntityCustoms(state, entityId)
        return customs.find(f => f.id === customId)
    }
    getEntityCustomIndex(state, entityId, customId) {
        const customs = this.getEntityCustoms(state, entityId)
        return customs.findIndex(f => f.id === customId)
    }

    /* ENTITY GLOBAL */

    getEntityEffectiveFields(state, entityId) {
        return [].
            concat(this.getEntityFields(state, entityId)).
            concat(this.getEntityCustomIds(state, entityId)).
            concat(this.getEntityHeritedFields(state, entityId)).
            concat(this.getEntityHeritedCustoms(state, entityId))
    }

    getEntityHeritedFields(state, entityId) {
        return this.getEntityExtends(state, entityId).reduce((result, extend) => {
            return result.
                concat(this.getEntityFields(state, extend)).
                concat(this.getEntityHeritedFields(state, extend))
        }, [])
    }

    getEntityHeritedCustoms(state, entityId) {
        return this.getEntityExtends(state, entityId).reduce((result, extend) => {
            return result.
                concat(this.getEntityCustomIds(state, extend)).
                concat(this.getEntityHeritedCustoms(state, extend))
        }, [])
    }
}

const Helper = new StateHelper()

HelperRegistry.register(Helper, 'State')

export default Helper