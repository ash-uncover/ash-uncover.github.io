import React from 'react'
import PropTypes from 'prop-types'

import ModelFormInputContainer from '../../ModelFormInputContainer'

import './_server-settings.scss'

class ServerSettings extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='server-settings'>
                <h2>Server settings</h2>
                <ModelFormInputContainer 
                    id='project.server.config.protocol' 
                    name='Server protocol' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.server.config.host' 
                    name='Server host' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.server.config.port' 
                    name='Server port' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.server.config.baseUrl' 
                    name='Server base url' 
                    edit={true} />
            </div>
        )
    }
}

ServerSettings.propTypes = {
}

ServerSettings.defaultProps = {
}

export default ServerSettings