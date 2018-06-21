import React from 'react'
import PropTypes from 'prop-types'

import './_app.scss'

class AppHome extends React.Component {

    constructor() {
        super(...arguments)

        this.onNewProject = this.onNewProject.bind(this)
        this.onImportProject = this.onImportProject.bind(this)
    }

    /* RENDERING */

    onNewProject() {
        this.props.onNavigate('/project')
    }
    onImportProject() {
        this.props.onNavigate('/project')
    }

    render() {
        return (
            <div className='app-home'>
                <button className='app-home-item' onClick={this.onNewProject}>
                    <i className='icon fas fa-plus-square'></i>
                    <span className='text'>New Project</span>
                </button>
                <button className='app-home-item' onClick={this.onImportProject}>
                    <i className='icon fas fa-download'></i>
                    <span className='text'>Import Project</span>
                </button>
            </div>
        )
    }
}

AppHome.propTypes = {
    onNavigate: PropTypes.func.isRequired
}

AppHome.defaultProps = {
}

export default AppHome