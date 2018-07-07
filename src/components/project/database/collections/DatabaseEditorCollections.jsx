import React from 'react'
import PropTypes from 'prop-types'

import DatabaseEditorCollectionContainer from './DatabaseEditorCollectionContainer'

import './_database-collections.scss'

class DatabaseEditorCollections extends React.Component {
  constructor () {
    super(...arguments)

    this.state = {
      newCollection: '',
      newCollectionValid: true
    }

    this.onNewCollectionChange = this.onNewCollectionChange.bind(this)
    this.onCreateCollection = this.onCreateCollection.bind(this)
    this.buildCollection = this.buildCollection.bind(this)
  }

  /* VIEW CALLBACKS */

  onNewCollectionChange (event) {
    this.setState({
      newCollection: event.target.value,
      newCollectionValid: this.props.collections.indexOf(event.target.value) === -1
    })
  }

  onCreateCollection () {
    if (this.state.newCollectionValid) {
      this.props.onAddCollection(this.state.newCollection)
      this.setState({ newCollection: '' })
    }
  }

  /* RENDERING */

  buildCollection (id, index) {
    return (
      <DatabaseEditorCollectionContainer
        key={index}
        id={id} />
    )
  }

  render () {
    let disabled = !this.state.newCollection || !this.state.newCollectionValid
    return (
      <div className='database-editor-collections'>
        <h2>{'Database collections'}</h2>
        { this.props.collections.map(this.buildCollection) }
        <div className='input-group mb-3'>
          <input
            type='text'
            className={`form-control${this.state.newCollectionValid ? '' : ' invalid'}`}
            placeholder={'Specify collection...'}
            value={this.state.newCollection}
            onChange={this.onNewCollectionChange} />
          <div className='input-group-append'>
            <button
              type='button'
              className={`btn btn-${disabled ? 'default' : 'primary'}`}
              disabled={disabled}
              onClick={this.onCreateCollection}>
              {'Add collection'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

DatabaseEditorCollections.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.string),

  onAddCollection: PropTypes.func.isRequired
}

DatabaseEditorCollections.defaultProps = {
  collections: []
}

export default DatabaseEditorCollections
