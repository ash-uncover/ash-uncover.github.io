import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import Settings from 'components/settings/Settings'
import DatabaseEditor from 'components/database/DatabaseEditor'
import Server from 'components/server/Server'
import FrontEditor from 'components/front/FrontEditor'

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
                        component={DatabaseEditor} />
                    <Route
                        exact
                        path='/server'
                        component={Server} />
                    <Route
                        exact
                        path='/front'
                        component={FrontEditor} />
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