import ActionRegistry from 'core/ActionRegistry'

// app navigation
ActionRegistry.register('APP_NAVIGATE', ['url'])

// model 
ActionRegistry.register('LOAD_MODEL', ['model'])
ActionRegistry.register('UPDATE_MODEL', ['path', 'value'])
