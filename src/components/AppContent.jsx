import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import Settings from 'components/project/settings/Settings'
import Database from 'components/project/database/Database'
import Server from 'components/project/server/Server'
import Front from 'components/project/front/Front'

import './_app.scss'

class AppContent extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='app-content'>
                <Switch>
                    <Route
                        exact
                        path='/settings'
                        component={Settings} />
                    <Route
                        exact
                        path='/database'
                        component={Database} />
                    <Route
                        exact
                        path='/server'
                        component={Server} />
                    <Route
                        exact
                        path='/front'
                        component={Front} />
                </Switch>
            </div>
        )
    }
}

AppContent.propTypes = {
}

AppContent.defaultProps = {
}

export default AppContent