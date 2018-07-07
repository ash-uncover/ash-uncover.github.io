import React from 'react'

import ModelFormInputContainer from '../../ModelFormInputContainer'

import './_front-settings.scss'

class FrontSettings extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='front-settings'>
        <h2>{'Front settings'}</h2>
        <ModelFormInputContainer
          id='project.front.config.protocol'
          name='Front protocol'
          edit />
        <ModelFormInputContainer
          id='project.front.config.host'
          name='Front host'
          edit />
        <ModelFormInputContainer
          id='project.front.config.port'
          name='Front port'
          edit />
      </div>
    )
  }
}

FrontSettings.propTypes = {
}

FrontSettings.defaultProps = {
}

export default FrontSettings
