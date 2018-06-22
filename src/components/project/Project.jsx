import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import ProjectMenu from './ProjectMenu'

import Settings from './settings/Settings'
import Database from './database/Database'
import Server from './server/Server'
import Front from './front/Front'

import './_project.scss'

const MENU_ITEMS = {
    PROJECT: { id:'SETTINGS', src:'fas fa-project-diagram', name: 'Settings', link: '/project/settings' },
    DATABASE: { id:'DATABASE', src:'fas fa-database', name: 'Database', link: '/project/database' },
    SERVER: { id:'SERVER', src:'fas fa-upload', name: 'Server', link: '/project/server' },
    FRONT: { id:'FRONT', src:'fab fa-trello', name: 'Front', link: '/project/front' }
}

class Project extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='project'>
                <ProjectMenu items={Object.values(MENU_ITEMS)} />
                <div className='project-content'>
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
            </div>
        )
    }
}

Project.propTypes = {
}

Project.defaultProps = {
}

export default Project