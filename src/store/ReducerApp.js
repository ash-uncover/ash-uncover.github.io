import ActionRegistry from 'core/ActionRegistry'

export const getDefaultState = () => ({
    router:{
        currentUrl: '/'
    },
    grid: {
        cells: [],
        select: {
            start: null,
            current: null,
            end: null
        }
    }
})

const reducer = (state = getDefaultState(), action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {

    case ActionRegistry.APP_NAVIGATE:
        newState.router.currentUrl = action.args.url
        return newState

    case ActionRegistry.APP_GRID_SELECT_START:
        return newState

    case ActionRegistry.APP_GRID_SELECT_CONTINUE:
        return newState

    case ActionRegistry.APP_GRID_SELECT_STOP:
        return newState

    default:
        return state
    }
}

export default reducer
