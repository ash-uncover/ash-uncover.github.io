import ActionRegistry from 'core/ActionRegistry'

// app load
ActionRegistry.register('DATA_LOAD_TYPES_REQUEST')
ActionRegistry.register('DATA_LOAD_TYPES_SUCCESS', ['types'])
ActionRegistry.register('DATA_LOAD_TYPES_FAILURE', ['error'])

ActionRegistry.register('DATA_LOAD_MODULES_REQUEST')
ActionRegistry.register('DATA_LOAD_MODULES_SUCCESS', ['modules'])
ActionRegistry.register('DATA_LOAD_MODULES_FAILURE', ['error'])

ActionRegistry.register('DATA_LOAD_SAMPLE_REQUEST')
ActionRegistry.register('DATA_LOAD_SAMPLE_SUCCESS', ['sample'])
ActionRegistry.register('DATA_LOAD_SAMPLE_FAILURE', ['error'])

ActionRegistry.register('USE_SAMPLE',['project'])

// app navigation
ActionRegistry.register('APP_NAVIGATE', ['url'])

// model 
ActionRegistry.register('LOAD_MODEL_REQUEST')
ActionRegistry.register('LOAD_MODEL_SUCCESS', ['model'])
ActionRegistry.register('LOAD_MODEL_FAILURE', ['error'])

ActionRegistry.register('UPDATE_MODEL', ['path', 'value'])

ActionRegistry.register('CREATE_DATABASE_TYPE', ['id'])
ActionRegistry.register('UPDATE_DATABASE_TYPE', ['id','newId'])
ActionRegistry.register('DELETE_DATABASE_TYPE', ['id'])

ActionRegistry.register('CREATE_DATABASE_TYPE_VALUE', ['id','value'])
ActionRegistry.register('UPDATE_DATABASE_TYPE_VALUE', ['id','index','value'])
ActionRegistry.register('DELETE_DATABASE_TYPE_VALUE', ['id','value'])

ActionRegistry.register('CREATE_DATABASE_COLLECTION', ['collectionId'])
ActionRegistry.register('UPDATE_DATABASE_COLLECTION', ['collectionId','collection'])
ActionRegistry.register('DELETE_DATABASE_COLLECTION', ['collectionId'])

ActionRegistry.register('CREATE_DATABASE_COLLECTION_FIELD', ['collectionId','fieldId'])
ActionRegistry.register('UPDATE_DATABASE_COLLECTION_FIELD', ['collectionId','fieldId','field'])
ActionRegistry.register('DELETE_DATABASE_COLLECTION_FIELD', ['collectionId','fieldId'])
