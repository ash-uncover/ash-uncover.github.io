import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'actions'
import './helpers/**/*'
import store from 'store'

import AppRootContainer from 'components/AppRootContainer'

import 'bootstrap'
import './_custom.scss'


render(
    <BrowserRouter>
        <Provider store={store}>
            <AppRootContainer />
        </Provider>
    </BrowserRouter>
, document.getElementById('reactroot'));
