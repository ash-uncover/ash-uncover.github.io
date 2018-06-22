import React from 'react'
import PropTypes from 'prop-types'

import './_project.scss'
import ProjectMenuItemContainer from './ProjectMenuItemContainer';

class ProjectMenu extends React.Component {

    constructor() {
        super(...arguments)

        this.buildItem = this.buildItem.bind(this)
    }

    /* RENDERING */

    buildItem(item, index) {
        return (
            <ProjectMenuItemContainer key={item.id} {...item} />
        )
    }

    render() {
        return (
            <div className='project-menu'>
                {this.props.items.map(this.buildItem)}
            </div>
        )
    }
}

ProjectMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }))
}

ProjectMenu.defaultProps = {
    items: []
}

export default ProjectMenu