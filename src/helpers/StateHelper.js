import HelperRegistry from 'core/HelperRegistry'

export class StateHelper {

    constructor () {
    }

    /* DATA TYPES */

    getDataTypes(state) {
        return state.data.types
    }
    getDataTypeIds(state) {
        return this.getDataTypes(state).map(t => t.id)
    }

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
}

const Helper = new StateHelper()

HelperRegistry.register(Helper, 'State')

export default Helper