import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import ModelFormInputContainer from '../ModelFormInputContainer'
import ServerEntitiesContainer from './entities/ServerEntitiesContainer'
import ServerEntityContainer from './entities/ServerEntityContainer'

import ServerSettings from './settings/ServerSettings'

import './_server.scss'

class ServerEditor extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='server-editor'>

                <Switch>
                    <Route exact path='/project/server'>
                        <ServerSettings />
                    </Route>
                    <Route path='/project/server/settings'>
                        <ServerSettings />
                    </Route>
                    <Route  
                        path='/project/server/entities/:entityId'
                        render={(props) => <ServerEntityContainer entityId={props.match.params.entityId} />} /> 
                    <Route path='/project/server/entities'>
                        <ServerEntitiesContainer />
                    </Route>
                    <Route path='/project/server/endpoints'>
                        <h2>Server endpoints</h2>
                    </Route>
                </Switch>
            </div>
        )
    }
}

ServerEditor.propTypes = {
}

ServerEditor.defaultProps = {
}

export default ServerEditor