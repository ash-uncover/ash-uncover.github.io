import React from 'react'
import PropTypes from 'prop-types'

import ModelFormInputContainer from '../../ModelFormInputContainer'

import './_database-settings.scss'

class DatabaseSettings extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='database-settings'>
                <h2>Database settings</h2>
                <ModelFormInputContainer 
                    id='project.database.config.host' 
                    name='Database host' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.database.config.port' 
                    name='Database port' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.database.config.name' 
                    name='Database name' 
                    edit={true} />
            </div>
        )
    }
}

DatabaseSettings.propTypes = {
}

DatabaseSettings.defaultProps = {
}

export default DatabaseSettings