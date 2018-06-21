import { combineReducers, createStore } from 'redux'

import app from 'reducers/ReducerApp'
import model from 'reducers/ReducerModel'

export const reducer = combineReducers({
    app,
    model
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
