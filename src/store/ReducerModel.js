import ActionRegistry from 'core/ActionRegistry'

export const getDefaultState = () => ({
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

    case ActionRegistry.UPDATE_MODEL:
        console.log(action)
        const elements = action.args.path.split('.')
        let element
        elements.reduce((result, e) => {
            element = result
            return result[e]
        }, newState)
        element[elements[elements.length - 1]] = action.args.value
        console.log(newState)
        return newState


    default:
        return state
    }
}

export default reducer
