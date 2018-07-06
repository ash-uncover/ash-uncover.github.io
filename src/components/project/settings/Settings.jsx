import React from 'react'

import SettingsMenu from './SettingsMenu'
import SettingsEditor from './SettingsEditor'

import './_settings.scss'

class Settings extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='settings'>
        <SettingsMenu />
        <SettingsEditor />
      </div>
    )
  }
}

Settings.propTypes = {
}

Settings.defaultProps = {
}

export default Settings
