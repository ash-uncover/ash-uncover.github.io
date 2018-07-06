import React from 'react'
import PropTypes from 'prop-types'

import ModelFormInputContainer from '../../ModelFormInputContainer'

import './_front-settings.scss'

class FrontSettings extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='front-settings'>
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
            </div>
        )
    }
}

FrontSettings.propTypes = {
}

FrontSettings.defaultProps = {
}

export default FrontSettings