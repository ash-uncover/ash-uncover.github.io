import React from 'react'
import PropTypes from 'prop-types'

import './_app.scss'

class AppHome extends React.Component {

    constructor() {
        super(...arguments)

        this.onNewProject = this.onNewProject.bind(this)
        this.onImportProject = this.onImportProject.bind(this)
    }

    createObjectURL(object) {
	    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
    }
    
    /* RENDERING */

    onNewProject() {
        this.props.onNavigate('/settings')
    }
    onImportProject(event) {
		event.preventDefault()
		if (this.fileInput.files.length && this.fileInput.files[0]) {
            const file = this.fileInput.files[0]
            console.log(file)
            console.log(file.toString())
            /*
			this.setState({ 
				src: this.createObjectURL(file),
				error: '' 
			})
            this.props.onLoadModel(model)
            */
		}
	}

    render() {
        return (
            <div className='app-home'>
                <button className='app-home-item' onClick={this.onNewProject}>
                    <i className='icon fas fa-plus-square'></i>
                    <span className='text'>New Project</span>
                </button>
                <span>
                    <label className='app-home-item' htmlFor='import-project'>
                        <i className='icon fas fa-download'></i>
                        <span className='text'>Import Project</span>
                    </label>
                    <input 
                        className='hidden' 
                        id='import-project' 
                        ref={(c) => this.fileInput = c} 
                        type='file'
                        onChange={this.onImportProject}
						accept={['*.json']} />
                </span>
            </div>
        )
    }
}

AppHome.propTypes = {
    onNavigate: PropTypes.func.isRequired,
    onLoadModel: PropTypes.func.isRequired
}

AppHome.defaultProps = {
}

export default AppHome