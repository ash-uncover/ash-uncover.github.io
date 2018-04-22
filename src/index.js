import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Load prerequisite
import 'actions'
import components from './components/**/*'
//import containers from './containers/*'
//import services from './services/*'
import reducer from 'reducers'

import ComponentRegistry from 'core/ComponentRegistry'
import ServiceRegistry from 'core/ServiceRegistry'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
    <BrowserRouter>
        <Provider store={store}>
            <ComponentRegistry.App />
        </Provider>
    </BrowserRouter>
, document.getElementById('reactroot'));
