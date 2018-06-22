import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import Project from 'components/project/Project'

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
                        path='/project'
                        component={Project} />
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