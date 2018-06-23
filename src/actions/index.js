import ActionRegistry from 'core/ActionRegistry'

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