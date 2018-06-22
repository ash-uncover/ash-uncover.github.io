import React from 'react'
import PropTypes from 'prop-types'

import './_project.scss'

class ProjectMenuItem extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    get className() {
        let result = 'project-menu-item'
        if (this.props.selected) result += ' selected'
        return result
    }
    render() {
        return (
            <div className={this.className} onClick={this.props.onNavigate}>
                <i className={`icon ${this.props.src}`} alt={this.props.name} />
            </div>
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