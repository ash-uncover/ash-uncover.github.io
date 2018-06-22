import ActionRegistry from 'core/ActionRegistry'

// app navigation
ActionRegistry.register('APP_NAVIGATE', ['url'])

// model 
ActionRegistry.register('LOAD_MODEL_REQUEST')
ActionRegistry.register('LOAD_MODEL_SUCCESS', ['model'])
ActionRegistry.register('LOAD_MODEL_FAILURE', ['error'])

ActionRegistry.register('UPDATE_MODEL', ['path', 'value'])
