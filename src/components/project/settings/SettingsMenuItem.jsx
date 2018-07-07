import React from 'react'
import PropTypes from 'prop-types'

import './_settings.scss'

class SettingsMenuItem extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='settings-menu-item'>
        <i className={`icon ${this.props.src}`} />
        <span className='text'>{this.props.name}</span>
      </div>
    )
  }
}

SettingsMenuItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

SettingsMenuItem.defaultProps = {
}

export default SettingsMenuItem
