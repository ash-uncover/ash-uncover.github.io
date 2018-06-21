import ActionRegistry from 'core/ActionRegistry'

// app navigation
ActionRegistry.register('APP_NAVIGATE', ['url'])

// app grid
ActionRegistry.register('APP_GRID_SELECT_START', ['x', 'y'])
ActionRegistry.register('APP_GRID_SELECT_CONTINUE', ['x', 'y'])
ActionRegistry.register('APP_GRID_SELECT_END', ['x', 'y'])

// model 
ActionRegistry.register('UPDATE_MODEL', ['path', 'value'])
