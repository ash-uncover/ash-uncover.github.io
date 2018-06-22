import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import Settings from 'components/project/settings/Settings'
import Database from 'components/project/database/Database'
import Server from 'components/project/server/Server'
import Front from 'components/project/front/Front'

import './_app.scss'

class Project extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='project'>
                <Switch>
                    <Route
                        exact
                        path='/project/settings'
                        component={Settings} />
                    <Route
                        exact
                        path='/project/database'
                        component={Database} />
                    <Route
                        exact
                        path='/project/server'
                        component={Server} />
                    <Route
                        exact
                        path='/project/front'
                        component={Front} />
                </Switch>
            </div>
        )
    }
}

Project.propTypes = {
}

Project.defaultProps = {
}

export default Project