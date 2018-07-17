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
  PROJECT: { id: 'SETTINGS', src: 'fas fa-project-diagram', name: 'Settings', link: '/project/settings' },
  DATABASE: { id: 'DATABASE', src: 'fas fa-database', name: 'Database', link: '/project/database' },
  SERVER: { id: 'SERVER', src: 'fas fa-hdd', name: 'Server', link: '/project/server' },
  FRONT: { id: 'FRONT', src: 'fab fa-trello', name: 'Front', link: '/project/front' }
}

class Project extends React.Component {
  constructor () {
    super(...arguments)

    if (!this.props.projectOpened) {
      this.props.onBack()
    }
  }
  /* RENDERING */

  render () {
    return (
      <div className='project'>
        <ProjectMenu items={Object.values(MENU_ITEMS)} />
        <div className='project-content'>
          <Switch>
            <Route
              path='/project/settings'
              component={Settings} />
            <Route
              path='/project/database'
              component={Database} />
            <Route
              path='/project/server'
              component={Server} />
            <Route
              path='/project/front'
              component={Front} />
          </Switch>
        </div>
      </div>
    )
  }
}

Project.propTypes = {
  projectOpened: PropTypes.bool,

  onBack: PropTypes.func.isRequired
}

Project.defaultProps = {
  projectOpened: false
}

export default Project
