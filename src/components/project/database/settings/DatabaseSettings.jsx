import React from 'react'

import ModelFormInputContainer from '../../ModelFormInputContainer'

import './_database-settings.scss'

class DatabaseSettings extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='database-settings'>
        <h2>{'Database settings'}</h2>
        <ModelFormInputContainer
          id='project.database.config.host'
          name='Database host'
          edit />
        <ModelFormInputContainer
          id='project.database.config.port'
          name='Database port'
          edit />
        <ModelFormInputContainer
          id='project.database.config.name'
          name='Database name'
          edit />
      </div>
    )
  }
}

DatabaseSettings.propTypes = {
}

DatabaseSettings.defaultProps = {
}

export default DatabaseSettings
