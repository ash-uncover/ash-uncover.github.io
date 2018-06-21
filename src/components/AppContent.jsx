import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import ProjectEditor from 'components/project/ProjectEditor'
import DatabaseEditor from 'components/database/DatabaseEditor'
import ServerEditor from 'components/server/ServerEditor'
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
                        path='/project'
                        component={ProjectEditor} />
                    <Route
                        exact
                        path='/database'
                        component={DatabaseEditor} />
                    <Route
                        exact
                        path='/server'
                        component={ServerEditor} />
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