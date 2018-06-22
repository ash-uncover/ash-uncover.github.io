import React from 'react'
import PropTypes from 'prop-types'

import SettingsFormInputContainer from './SettingsFormInputContainer'
import SettingsFormSwitchContainer from './SettingsFormSwitchContainer'

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
                <SettingsFormInputContainer 
                    id='project.name' 
                    name='Project name' 
                    edit={true} />

                <h3>Repository</h3>
                <SettingsFormInputContainer 
                    id='project.github.workspace' 
                    name='Repository workspace' 
                    edit={true} />
                <SettingsFormInputContainer 
                    id='project.github.repository' 
                    name='Repository name' 
                    edit={true} />
                
                <h2>Modules</h2>
                
                <h3>Authentication module</h3>
                <SettingsFormSwitchContainer 
                    id='project.modules.auth.use'
                    name='use'
                    edit={true} />
                <SettingsFormSwitchContainer 
                    id='project.modules.auth.config.enforceMail'
                    name='Mail verification'
                    edit={true} />
                
                <h3>Mail module</h3>
                <SettingsFormSwitchContainer 
                    id='project.modules.mail.use'
                    name='use'
                    edit={true} />
                <SettingsFormInputContainer 
                    id='project.modules.mail.config.smtpHost' 
                    name='SMTP Host' 
                    edit={true} />
                <SettingsFormInputContainer 
                    id='project.modules.mail.config.smtpPort' 
                    name='SMTP Port' 
                    edit={true} />
                <SettingsFormInputContainer 
                    id='project.modules.mail.config.smtpUser' 
                    name='SMTP User' 
                    edit={true} />
                <SettingsFormInputContainer 
                    id='project.modules.mail.config.smtpPass' 
                    name='SMTP Password' 
                    edit={true} />
                <SettingsFormInputContainer 
                    id='project.modules.mail.config.username' 
                    name='Username' 
                    edit={true} />

                <h3>Googlemap module</h3>
                <SettingsFormSwitchContainer
                    id='project.modules.googlemap.use'
                    name='use'
                    edit={true} />
                <SettingsFormInputContainer 
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