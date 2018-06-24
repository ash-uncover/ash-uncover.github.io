import ActionRegistry from 'core/ActionRegistry'

export const getDefaultState = () => ({
    types: [],
    typesLoaded: 0,
    typesLoading: false,
    typesLoadingError: '',

    modules: [],
    modulesLoaded: 0,
    modulesLoading: false,
    modulesLoadingError: '',

    sample: {},
    sampleLoaded: 0,
    sampleLoading: false,
    sampleLoadingError: ''
})

const reducer = (state = getDefaultState(), action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {

    case ActionRegistry.DATA_LOAD_TYPES_REQUEST:
        newState.typesLoading = true
        newState.typesLoadingError = ''
        return newState
    case ActionRegistry.DATA_LOAD_TYPES_SUCCESS:
        newState.typesLoaded = 1
        newState.typesLoading = false
        newState.types = action.args.types
        return newState
    case ActionRegistry.DATA_LOAD_TYPES_FAILURE:
        newState.typesLoading = false
        newState.typesLoadingError = action.args.error
        return newState

    case ActionRegistry.DATA_LOAD_MODULES_REQUEST:
        newState.modulesLoading = true
        newState.modulesLoadingError = ''
        return newState
    case ActionRegistry.DATA_LOAD_MODULES_SUCCESS:
        newState.modulesLoaded = 1
        newState.modulesLoading = false
        newState.modules = action.args.modules
        return newState
    case ActionRegistry.DATA_LOAD_MODULES_FAILURE:
        newState.modulesLoading = false
        newState.modulesLoadingError = action.args.error
        return newState

    case ActionRegistry.DATA_LOAD_SAMPLE_REQUEST:
        newState.sampleLoading = true
        newState.sampleLoadingError = ''
        return newState
    case ActionRegistry.DATA_LOAD_SAMPLE_SUCCESS:
        newState.sampleLoaded = 1
        newState.sampleLoading = false
        newState.sample = action.args.sample
        return newState
    case ActionRegistry.DATA_LOAD_SAMPLE_FAILURE:
        newState.sampleLoading = false
        newState.sampleLoadingError = action.args.error
        return newState

    default:
        return state
    }
}

export default reducer
