import React from 'react'

import ModelFormInputContainer from '../../ModelFormInputContainer'

import './_server-settings.scss'

class ServerSettings extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='server-settings'>
        <h2>{'Server settings'}</h2>
        <ModelFormInputContainer
          id='project.server.config.protocol'
          name='Server protocol'
          edit />
        <ModelFormInputContainer
          id='project.server.config.host'
          name='Server host'
          edit />
        <ModelFormInputContainer
          id='project.server.config.port'
          name='Server port'
          edit />
        <ModelFormInputContainer
          id='project.server.config.baseUrl'
          name='Server base url'
          edit />
      </div>
    )
  }
}

ServerSettings.propTypes = {
}

ServerSettings.defaultProps = {
}

export default ServerSettings
