import React from 'react'

import ModelFormInputContainer from '../ModelFormInputContainer'
import ModelFormSwitchContainer from '../ModelFormSwitchContainer'

import './_settings.scss'

class SettingsEditor extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='settings-editor'>

        <h2>{'Global Settings'}</h2>

        <h3>{'General information'}</h3>
        <ModelFormInputContainer
          id='project.name'
          name='Project name'
          edit />

        <h3>{'Repository'}</h3>
        <ModelFormInputContainer
          id='project.github.workspace'
          name='Repository workspace'
          edit />
        <ModelFormInputContainer
          id='project.github.repository'
          name='Repository name'
          edit />

        <h2>{'Modules'}</h2>

        <h3>{'Authentication module'}</h3>
        <ModelFormSwitchContainer
          id='project.modules.auth.use'
          name='use'
          edit />
        <ModelFormSwitchContainer
          id='project.modules.auth.config.enforceMail'
          name='Mail verification'
          edit />

        <h3>{'Mail module'}</h3>
        <ModelFormSwitchContainer
          id='project.modules.mail.use'
          name='use'
          edit />
        <ModelFormInputContainer
          id='project.modules.mail.config.smtpHost'
          name='SMTP Host'
          edit />
        <ModelFormInputContainer
          id='project.modules.mail.config.smtpPort'
          name='SMTP Port'
          edit />
        <ModelFormInputContainer
          id='project.modules.mail.config.smtpUser'
          name='SMTP User'
          edit />
        <ModelFormInputContainer
          id='project.modules.mail.config.smtpPass'
          name='SMTP Password'
          edit />
        <ModelFormInputContainer
          id='project.modules.mail.config.username'
          name='Username'
          edit />

        <h3>{'Googlemap module'}</h3>
        <ModelFormSwitchContainer
          id='project.modules.googlemap.use'
          name='use'
          edit />
        <ModelFormInputContainer
          id='project.modules.googlemap.config.apiKey'
          name='API Key'
          edit />

      </div>
    )
  }
}

SettingsEditor.propTypes = {
}

SettingsEditor.defaultProps = {
}

export default SettingsEditor
