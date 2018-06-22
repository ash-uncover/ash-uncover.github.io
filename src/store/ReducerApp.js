import ActionRegistry from 'core/ActionRegistry'

export const getDefaultState = () => ({
    router:{
        currentUrl: '/'
    }
})

const reducer = (state = getDefaultState(), action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {

    case ActionRegistry.APP_NAVIGATE:
        newState.router.currentUrl = action.args.url
        return newState

    default:
        return state
    }
}

export default reducer
