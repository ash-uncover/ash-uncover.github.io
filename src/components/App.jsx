import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import AppHomeContainer from 'components/AppHomeContainer'
import AppToolbar from 'components/AppToolbar'
import AppMenu from 'components/AppMenu'
import AppContent from 'components/AppContent'

import './_app.scss'

const MENU_ITEMS = {
    PROJECT: { id:'PROJECT', src:'fas fa-project-diagram', name: 'Project', link: '/project' },
    DATABASE: { id:'DATABASE', src:'fas fa-database', name: 'Database', link: '/database' },
    SERVER: { id:'Server', src:'fas fa-upload', name: 'Server', link: '/server' },
    FRONT: { id:'FRONT', src:'fab fa-trello', name: 'Front', link: '/front' }
}

class App extends React.Component {

    /* RENDERING */

    renderHome() {
        return (
            <AppHomeContainer />
        )
    }

    renderProject() {
        return [
            <AppMenu key='menu' items={Object.values(MENU_ITEMS)} />,
            <AppContent key='content' />
        ]
    }

    render() {
        return (
            <div className='app'>
                <AppToolbar />
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={this.renderHome} />
                    <Route
                        render={this.renderProject} />
                </Switch>
            </div>
        )
    }
}

App.propTypes = {
}

App.defaultProps = {
}

export default App