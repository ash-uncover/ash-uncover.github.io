import React from 'react'
import PropTypes from 'prop-types'

import './_menu.scss'

class MenuItem extends React.Component {
  /* RENDERING */

  get className () {
    let result = 'menu-item'
    if (this.props.selected) result += ' selected'
    return result
  }

  render () {
    return (
      <div className={this.className} onClick={this.props.onClick}>
        <i className={`icon ${this.props.src}`} />
        <span className='text'>
          {this.props.name}
        </span>
      </div>
    )
  }
}

MenuItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,

  onClick: PropTypes.func.isRequired
}

MenuItem.defaultProps = {
  selected: false
}

export default MenuItem
