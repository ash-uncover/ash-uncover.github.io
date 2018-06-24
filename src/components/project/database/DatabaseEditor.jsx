import React from 'react'
import PropTypes from 'prop-types'

import ModelFormInputContainer from '../ModelFormInputContainer'

import DatabaseEditorTypesContainer from './types/DatabaseEditorTypesContainer'
import DatabaseEditorCollectionsContainer from './collections/DatabaseEditorCollectionsContainer'

import './_database.scss'

class DatabaseEditor extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='database-editor'>
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

                <h2>Database types</h2>
                <DatabaseEditorTypesContainer />

                <h2>Database collections</h2>
                <DatabaseEditorCollectionsContainer />
            </div>
        )
    }
}

DatabaseEditor.propTypes = {
}

DatabaseEditor.defaultProps = {
}

export default DatabaseEditor