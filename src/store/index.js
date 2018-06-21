import { combineReducers, createStore } from 'redux'

import app from 'store/ReducerApp'
import model from 'store/ReducerModel'

export const reducer = combineReducers({
    app,
    model
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
