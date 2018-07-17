import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

export const getDefaultState = () => ({
  loading: false,
  loadingError: null,
  projectOpened: false,
  project: {
    name: 'New Project',
    github: {
      workspace: '',
      repository: ''
    },
    modules: {
      mail: {
        use: false,
        config: {
          smtpHost: '',
          smtpPort: 0,
          smtpUser: '',
          smtpPass: '',
          username: ''
        }
      },
      auth: {
        use: false,
        config: {
          enforceMail: false
        }
      },
      googlemap: {
        use: false,
        config: {
          apiKey: ''
        }
      }
    },
    database: {
      config: {
        host: '127.0.0.1',
        port: 4242,
        name: 'db'
      },
      collections: [],
      types: []
    },
    server: {
      config: {
        protocol: 'http',
        host: '127.0.0.1',
        port: '8090',
        baseUrl: '/api/v1'
      },
      entities: [],
      endpoints: []
    },
    front: {
      config: {
        protocol: 'http',
        host: '127.0.0.1',
        port: '8080'
      },
      components: []
    }
  }
})

const reducer = (state = getDefaultState(), action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    /* MODEL */

    case ActionRegistry.USE_SAMPLE:
      newState.project = action.args.sample
      newState.projectOpened = true
      return newState

    case ActionRegistry.NEW_PROJECT:
      newState.projectOpened = true
      return newState

    case ActionRegistry.LOAD_MODEL_REQUEST:
      newState.loading = true
      newState.loadingError = null
      return newState

    case ActionRegistry.LOAD_MODEL_SUCCESS:
      newState.loading = false
      newState.project = action.args.model
      newState.projectOpened = true
      return newState

    case ActionRegistry.LOAD_MODEL_FAILURE:
      newState.loading = false
      newState.loadingError = action.args.error
      return newState

    case ActionRegistry.UPDATE_MODEL:
      const elements = action.args.path.split('.')
      let element
      elements.reduce((result, e) => {
        element = result
        return result[e]
      }, newState)
      element[elements[elements.length - 1]] = action.args.value
      return newState

    /* TYPES */

    case ActionRegistry.CREATE_DATABASE_TYPE:
      newState.project.database.types.push({
        id: action.args.id,
        values: []
      })
      return newState

    case ActionRegistry.UPDATE_DATABASE_TYPE: {
      const type = newState.project.database.types.find(type => {
        return type.id === action.args.id
      })
      type.id = action.args.newId
      return newState
    }

    case ActionRegistry.DELETE_DATABASE_TYPE: {
      const index = newState.project.database.types.findIndex(type => {
        return type.id === action.args.id
      })
      newState.project.database.types.splice(index, 1)
      return newState
    }

    /* TYPE VALUES */

    case ActionRegistry.CREATE_DATABASE_TYPE_VALUE: {
      const type = newState.project.database.types.find(type => {
        return type.id === action.args.id
      })
      type.values.push(action.args.value)
      return newState
    }

    case ActionRegistry.UPDATE_DATABASE_TYPE_VALUE: {
      const type = newState.project.database.types.find(type => {
        return type.id === action.args.id
      })
      type.values[action.args.index] = action.args.value
      return newState
    }

    case ActionRegistry.DELETE_DATABASE_TYPE_VALUE: {
      const type = newState.project.database.types.find(type => {
        return type.id === action.args.id
      })
      type.values.splice(type.values.indexOf(action.args.value), 1)
      return newState
    }

    /* COLLECTIONS */

    case ActionRegistry.CREATE_DATABASE_COLLECTION:
      newState.project.database.collections.push({
        id: action.args.collectionId,
        fields: []
      })
      return newState

    case ActionRegistry.UPDATE_DATABASE_COLLECTION: {
      const collection = newState.project.database.collections.find(collection => {
        return collection.id === action.args.collectionId
      })
      Object.assign(collection, action.args.collection)
      return newState
    }

    case ActionRegistry.DELETE_DATABASE_COLLECTION: {
      const index = newState.project.database.collections.findIndex(collection => {
        return collection.id === action.args.collectionId
      })
      newState.project.database.collections.splice(index, 1)
      return newState
    }

    /* COLLECTION FIELDS */

    case ActionRegistry.CREATE_DATABASE_COLLECTION_FIELD: {
      const collection = HelperRegistry.State.getCollection({ model: newState }, action.args.collectionId)
      collection.fields.push({
        id: action.args.fieldId,
        type: 'string',
        isArray: false
      })
      return newState
    }

    case ActionRegistry.UPDATE_DATABASE_COLLECTION_FIELD: {
      const field = HelperRegistry.State.getCollectionField(
        { model: newState },
        action.args.collectionId,
        action.args.fieldId
      )
      Object.assign(field, action.args.field)
      return newState
    }

    case ActionRegistry.DELETE_DATABASE_COLLECTION_FIELD: {
      const fields = HelperRegistry.State.getCollectionFields({ model: newState }, action.args.collectionId)
      const index = HelperRegistry.State.getCollectionFieldIndex(
        { model: newState },
        action.args.collectionId,
        action.args.fieldId
      )
      fields.splice(index, 1)
      return newState
    }

    /* ENTITIES */

    case ActionRegistry.CREATE_SERVER_ENTITY:
      newState.project.server.entities.push({
        id: action.args.entityId,
        extends: [],
        fields: [],
        customs: []
      })
      return newState

    case ActionRegistry.UPDATE_SERVER_ENTITY: {
      const entity = newState.project.server.entities.find(entity => {
        return entity.id === action.args.entityId
      })
      Object.assign(entity, action.args.entity)
      return newState
    }

    case ActionRegistry.DELETE_SERVER_ENTITY: {
      const index = newState.project.server.entities.findIndex(entity => {
        return entity.id === action.args.entityId
      })
      newState.project.server.entities.splice(index, 1)
      return newState
    }

    /* ENTITY EXTENDS */

    case ActionRegistry.ADD_SERVER_ENTITY_EXTEND: {
      const entity = HelperRegistry.State.getEntity(
        { model: newState },
        action.args.entityId
      )
      if (entity.extends.indexOf(action.args.extendId) === -1) {
        entity.extends.push(action.args.extendId)
      }
      return newState
    }

    case ActionRegistry.RMV_SERVER_ENTITY_EXTEND: {
      const entity = HelperRegistry.State.getEntity(
        { model: newState },
        action.args.entityId
      )
      entity.extends.splice(entity.extends.indexOf(action.args.extendId), 1)
      return newState
    }

    /* ENTITY FIELDS */

    case ActionRegistry.ADD_SERVER_ENTITY_FIELD: {
      const entity = HelperRegistry.State.getEntity(
        { model: newState },
        action.args.entityId
      )
      if (entity.fields.indexOf(action.args.fieldId) === -1) {
        entity.fields.push(action.args.fieldId)
      }
      return newState
    }

    case ActionRegistry.RMV_SERVER_ENTITY_FIELD: {
      const entity = HelperRegistry.State.getEntity(
        { model: newState },
        action.args.entityId
      )
      entity.fields.splice(entity.fields.indexOf(action.args.fieldId), 1)
      return newState
    }

    /* ENTITY CUSTOMS */

    case ActionRegistry.CREATE_SERVER_ENTITY_CUSTOM: {
      const entity = HelperRegistry.State.getEntity(
        { model: newState },
        action.args.entityId
      )
      entity.customs.push({
        id: action.args.customId,
        type: 'string'
      })
      return newState
    }

    case ActionRegistry.UPDATE_SERVER_ENTITY_CUSTOM: {
      const custom = HelperRegistry.State.getEntityCustom(
        { model: newState },
        action.args.entityId,
        action.args.customId
      )
      Object.assign(custom, action.args.custom)
      return newState
    }

    case ActionRegistry.DELETE_SERVER_ENTITY_CUSTOM: {
      const customs = HelperRegistry.State.getEntityCustoms(
        { model: newState },
        action.args.entityId
      )
      const index = HelperRegistry.State.getEntityCustomIndex(
        { model: newState },
        action.args.entityId,
        action.args.customId
      )
      customs.splice(index, 1)
      return newState
    }

    default:
      return state
  }
}

export default reducer
