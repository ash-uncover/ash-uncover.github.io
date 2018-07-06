import React from 'react'
import PropTypes from 'prop-types'

import './_project.scss'

class ProjectMenuItem extends React.Component {
  /* RENDERING */

  get className () {
    let result = `project-menu-item`
    if (this.props.selected) result += ' selected'
    return result
  }
  render () {
    return (
      <button className={`btn btn-dark ${this.className}`} onClick={this.props.onNavigate}>
        <i className={`icon ${this.props.src}`} alt={this.props.name} />
      </button>
    )
  }
}

ProjectMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  onNavigate: PropTypes.func.isRequired
}

ProjectMenuItem.defaultProps = {
}

export default ProjectMenuItem
