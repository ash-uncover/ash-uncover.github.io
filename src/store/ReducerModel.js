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
            collections: []
        },
        server: {
            baseUrl: '',
            entities: [],
            endpoints: []
        },
        front: {
            components: []
        }
    }
})

const reducer = (state = getDefaultState(), action) => {
    const newState = JSON.parse(JSON.stringify(state))

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

    default:
        return state
    }
}

export default reducer
