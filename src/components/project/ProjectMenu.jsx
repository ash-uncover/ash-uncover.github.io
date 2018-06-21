import React from 'react'
import PropTypes from 'prop-types'

import ProjectMenuItem from 'components/project/ProjectMenuItem'
import './_project.scss'

const ITEMS = [
    { id: 'settings', name: 'Project settings', src: 'fas fa-cogs' },
    { id: 'modules', name: 'Project modules', src: 'fas fa-th' }
]

class ProjectMenu extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    buildItem(item, index) {
        return (
            <ProjectMenuItem key={item.id} {...item} />
        )
    }

    render() {
        return (
            <div className='project-menu'>
                <div className='title'>
                    Project
                </div>
                <div className='items'>
                    {ITEMS.map(this.buildItem)}
                </div>
            </div>
        )
    }
}

ProjectMenu.propTypes = {
}

ProjectMenu.defaultProps = {
}

export default ProjectMenu