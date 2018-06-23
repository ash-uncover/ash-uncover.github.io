import React from 'react'
import PropTypes from 'prop-types'

import ModelFormInputContainer from '../ModelFormInputContainer'
import ModelFormSwitchContainer from '../ModelFormSwitchContainer'

import './_settings.scss'

class SettingsEditor extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='settings-editor'>
                
                <h2>Global Settings</h2>

                <h3>General information</h3>
                <ModelFormInputContainer 
                    id='project.name' 
                    name='Project name' 
                    edit={true} />

                <h3>Repository</h3>
                <ModelFormInputContainer 
                    id='project.github.workspace' 
                    name='Repository workspace' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.github.repository' 
                    name='Repository name' 
                    edit={true} />
                
                <h2>Modules</h2>
                
                <h3>Authentication module</h3>
                <ModelFormSwitchContainer 
                    id='project.modules.auth.use'
                    name='use'
                    edit={true} />
                <ModelFormSwitchContainer 
                    id='project.modules.auth.config.enforceMail'
                    name='Mail verification'
                    edit={true} />
                
                <h3>Mail module</h3>
                <ModelFormSwitchContainer 
                    id='project.modules.mail.use'
                    name='use'
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.modules.mail.config.smtpHost' 
                    name='SMTP Host' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.modules.mail.config.smtpPort' 
                    name='SMTP Port' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.modules.mail.config.smtpUser' 
                    name='SMTP User' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.modules.mail.config.smtpPass' 
                    name='SMTP Password' 
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.modules.mail.config.username' 
                    name='Username' 
                    edit={true} />

                <h3>Googlemap module</h3>
                <ModelFormSwitchContainer
                    id='project.modules.googlemap.use'
                    name='use'
                    edit={true} />
                <ModelFormInputContainer 
                    id='project.modules.googlemap.config.apiKey' 
                    name='API Key' 
                    edit={true} />
                
            </div>
        )
    }
}

SettingsEditor.propTypes = {
}

SettingsEditor.defaultProps = {
}

export default SettingsEditor