import React from 'react'

import store from 'store'

import './_app.scss'

class AppToolbar extends React.Component {
  constructor () {
    super(...arguments)

    this.onExportProject = this.onExportProject.bind(this)
  }

  /* RENDERING */

  onExportProject () {
    const model = store.getState().model.project
    const name = model.name.toLowerCase().split(' ').filter(e => !!e).join('-')
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(model))
    const downloadAnchorNode = document.createElement('a')
    downloadAnchorNode.setAttribute('href', dataStr)
    downloadAnchorNode.setAttribute('download', `${name}.json`)
    document.body.appendChild(downloadAnchorNode)
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }

  render () {
    return (
      <div className='app-toolbar'>
        <div className='start'>
          <button type='button' className='app-toolbar-item'>
            {'AP-GENERATOR'}
          </button>
        </div>
        <div className='end'>
          <button type='button' className='app-toolbar-item' onClick={this.onExportProject}>
            <span>{'Export to file'}</span>
            <i className={'fas fa-save'} />
          </button>
          <button type='button' className='app-toolbar-item'>
            {'Sign In'}
          </button>
          <button type='button' className='app-toolbar-item'>
            {'Sign up'}
          </button>
        </div>
      </div>
    )
  }
}

AppToolbar.propTypes = {
}

AppToolbar.defaultProps = {
}

export default AppToolbar
