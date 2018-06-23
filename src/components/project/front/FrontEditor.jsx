import React from 'react'
import PropTypes from 'prop-types'

import ModelFormInputContainer from '../ModelFormInputContainer'
import ModelFormSwitchContainer from '../ModelFormSwitchContainer'

import './_front.scss'

class FrontEditor extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='front-editor'>
                <h2>Front settings</h2>
                <ModelFormInputContainer 
                    id='project.front.config.protocol' 
                    name='Front protocol' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.front.config.host' 
                    name='Front host' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.front.config.port' 
                    name='Front port' 
                    edit={true} />
                    
                <h2>Front components</h2>
            </div>
        )
    }
}

FrontEditor.propTypes = {
}

FrontEditor.defaultProps = {
}

export default FrontEditor