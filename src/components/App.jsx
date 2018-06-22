import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import AppToolbar from 'components/AppToolbar'
import AppHomeContainer from 'components/AppHomeContainer'
import Project from './project/Project'

import './_app.scss'

class App extends React.Component {

    /* RENDERING */

    render() {
        return (
            <div className='app'>
                <AppToolbar />
                <div className='app-content'>
                    <Switch>
                        <Route exact path='/'>
                            <AppHomeContainer />
                        </Route>
                        <Route path='/project'>
                            <Project />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

App.propTypes = {
}

App.defaultProps = {
}

export default App