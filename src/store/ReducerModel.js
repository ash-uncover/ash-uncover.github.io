import ActionRegistry from 'core/ActionRegistry'

export const getDefaultState = () => ({
    loading: false,
    loadingError: null,
    project:{
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
                    enforcemail: false
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
                name: ''
            },
            collections: {},
            types: [
                { id: 'type1', values: [ 'value1', 'value2' ] }
            ]
        },
        server: {
            config: {
                protocol: 'http',
                host: '127.0.0.1',
                port: '8090',
                baseUrl: '/api/v1'
            },
            entities: {},
            endpoints: {}
        },
        front: {
            config: {
                protocol: 'http',
                host: '127.0.0.1',
                port: '8080'
            },
            components: {}
        }
    }
})

const reducer = (state = getDefaultState(), action) => {
    const newState = JSON.parse(JSON.stringify(state))
    let type, index

    switch (action.type) {
    
    case ActionRegistry.LOAD_MODEL_REQUEST:
        newState.loading = true
        newState.loadingError = null
        return newState

    case ActionRegistry.LOAD_MODEL_SUCCESS:
        newState.loading = false
        newState.project = action.args.model
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

    case ActionRegistry.CREATE_DATABASE_TYPE:
        newState.project.database.types.push({
            id: action.args.id,
            values: []
        })
        return newState

    case ActionRegistry.UPDATE_DATABASE_TYPE:
        type = newState.project.database.types.find(type => {
            return type.id === action.args.id
        }) 
        type.id = action.args.newId
        return newState
    
    case ActionRegistry.DELETE_DATABASE_TYPE:
        index = newState.project.database.types.findIndex(type => {
            return type.id === action.args.id
        }) 
        newState.project.database.types.splice(index, 1)
        return newState

    case ActionRegistry.CREATE_DATABASE_TYPE_VALUE:
        type = newState.project.database.types.find(type => {
            return type.id === action.args.id
        }) 
        type.values.push(action.args.value)
        return newState

    case ActionRegistry.UPDATE_DATABASE_TYPE_VALUE:
        type = newState.project.database.types.find(type => {
            return type.id === action.args.id
        }) 
        type.values[action.args.index] = action.args.value
        return newState
    
    case ActionRegistry.DELETE_DATABASE_TYPE_VALUE:
        type = newState.project.database.types.find(type => {
            return type.id === action.args.id
        }) 
        type.values.splice(type.values.indexOf(action.args.value), 1)
        return newState

    default:
        return state
    }
}

export default reducer
