import React from 'react'
import PropTypes from 'prop-types'

import PromiseUtils from 'utils/PromiseUtils'

import Busy from 'components/commons/busy/Busy'

import './_app.scss'

class AppHome extends React.Component {
  constructor () {
    super(...arguments)

    this.onNewProject = this.onNewProject.bind(this)
    this.onImportProject = this.onImportProject.bind(this)
    this.onLoadSample = this.onLoadSample.bind(this)
  }

  /* RENDERING */

  onNewProject () {
    this.props.onNavigate('/project/settings')
  }
  onImportProject (event) {
    this.props.onLoadModelRequest()
    event.preventDefault()
    if (this.fileInput.files.length) {
      const file = this.fileInput.files[0]
      const promise = new Promise((resolve, reject) => {
        if (file) {
          const reader = new window.FileReader()
          reader.readAsText(file, 'UTF-8')
          reader.onload = e => {
            try {
              resolve(JSON.parse(e.target.result))
            } catch (error) {
              reject(error)
            }
          }
          reader.onerror = e => {
            reject(new Error('Error while loading model from file'))
          }
        } else {
          reject(new Error('No file selected'))
        }
      })
      PromiseUtils.delayed(promise, 1000)
        .then(result => {
          this.props.onLoadModelSuccess(result)
          this.props.onNavigate('/project/settings')
        })
        .catch(error => {
          this.props.onLoadModelFailure(error)
        })
    }
  }
  onLoadSample () {
    this.props.onUseSample(this.props.sample)
    this.props.onNavigate('/project/settings')
  }

  render () {
    return (
      <div className='app-home'>
        <button className='app-home-item' onClick={this.onNewProject}>
          <i className='icon fas fa-plus-square' />
          <span className='text'>New Project</span>
        </button>
        <span>
          <label className='app-home-item' htmlFor='import-project'>
            <i className='icon fas fa-download' />
            <span className='text'>Import Project</span>
          </label>
          <input
            className='hidden'
            id='import-project'
            ref={(c) => { this.fileInput = c }}
            type='file'
            onChange={this.onImportProject}
            accept={['*.json']} />
        </span>
        <button className='app-home-item' onClick={this.onLoadSample}>
          <i className='icon fas fa-file-upload' />
          <span className='text'>Load Sample</span>
        </button>
        { this.props.busy ? <Busy /> : null }
      </div>
    )
  }
}

AppHome.propTypes = {
  busy: PropTypes.bool,

  onNavigate: PropTypes.func.isRequired,

  onLoadModelRequest: PropTypes.func.isRequired,
  onLoadModelSuccess: PropTypes.func.isRequired,
  onLoadModelFailure: PropTypes.func.isRequired
}

AppHome.defaultProps = {
  busy: false
}

export default AppHome
