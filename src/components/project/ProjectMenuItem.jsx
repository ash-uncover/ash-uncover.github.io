import React from 'react'
import PropTypes from 'prop-types'

import './_project.scss'

class ProjectMenuItem extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='project-menu-item'>
                <i className={`icon ${this.props.src}`} />
                <span className='text'>{this.props.name}</span>
            </div>
        )
    }
}

ProjectMenuItem.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

ProjectMenuItem.defaultProps = {
}

export default ProjectMenuItem