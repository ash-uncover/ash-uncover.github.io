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
        this.props.onNavigate('/settings')
    }
    onImportProject(event) {
        this.props.onLoadModelRequest()
		event.preventDefault()
		if (this.fileInput.files.length && this.fileInput.files[0]) {
            const file = this.fileInput.files[0]
            if (file) {
                var reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = e => {
                    try {
                        const model = JSON.parse(e.target.result)
                        console.log(model)
                        this.props.onLoadModelSuccess(model)
                        this.props.onNavigate('/settings')
                    } catch (error) {
                        this.props.onLoadModelFailure(error)
                    }
                }
                reader.onerror = e => {
                    this.props.onLoadModelFailure('Error while loading model from file')
                }
            }
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
    
    onLoadModelRequest: PropTypes.func.isRequired,
    onLoadModelSuccess: PropTypes.func.isRequired,
    onLoadModelFailure: PropTypes.func.isRequired
}

AppHome.defaultProps = {
}

export default AppHome