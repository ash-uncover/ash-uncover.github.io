import React from 'react'
import PropTypes from 'prop-types'

import DatabaseEditorCollectionFieldContainer from './DatabaseEditorCollectionFieldContainer'

import './_database-collections.scss'

class DatabaseEditorCollection extends React.Component {
  constructor () {
    super(...arguments)

    this.state = {
      newField: '',
      newFieldValid: true,

      collectionId: this.props.collectionId,
      collectionValid: true
    }

    this.onChangeCollection = this.onChangeCollection.bind(this)
    this.onDeleteCollection = this.onDeleteCollection.bind(this)

    this.onNewFieldChange = this.onNewFieldChange.bind(this)
    this.onAddField = this.onAddField.bind(this)

    this.buildField = this.buildField.bind(this)
  }

  /* LIFECYLCLE */

  componentWillReceiveProps (props) {
    this.state.collectionId = props.collectionId
  }

  /* VIEW CALBACKS */

  onChangeCollection (event) {
    const collectionId = event.target.value
    const isValid = !!collectionId && this.props.collections.indexOf(collectionId) === -1
    this.setState({
      collectionId: collectionId,
      collectionValid: isValid
    })
    if (isValid) {
      this.props.onChangeCollection({ id: collectionId })
    }
  }
  onDeleteCollection () {
    this.props.onDeleteCollection()
  }

  onNewFieldChange (event) {
    this.setState({
      newField: event.target.value,
      newFieldValid: this.props.collectionFields.indexOf(event.target.value) === -1
    })
  }

  onAddField () {
    this.props.onAddField(this.state.newField)
    this.setState({ newField: '' })
  }

  /* RENDERING */

  buildField (fieldId, index) {
    return (
      <DatabaseEditorCollectionFieldContainer
        key={`field-${index}`}
        fieldId={fieldId}
        collectionId={this.props.collectionId} />
    )
  }

  render () {
    const addFieldDisabled = !this.state.newField || !this.state.newFieldValid
    return (
      <div className='database-editor-collection'>
        <h5>{`Collection`}</h5>
        <div className='input-group mb-3'>
          <input
            type='text'
            className={`form-control${this.state.collectionValid ? '' : ' invalid'}`}
            placeholder={'Specify collection...'}
            value={this.state.collectionId}
            onChange={this.onChangeCollection} />
          <div className='input-group-append'>
            <button
              className={`btn btn-danger`}
              onClick={this.onDeleteCollection}>
              {'Delete collection'}
            </button>
          </div>
        </div>

        <h5>{`Fields (${this.props.collectionFields.length})`}</h5>
        { this.props.collectionFields.map(this.buildField) }
        <div className='input-group mb-3'>
          <input
            type='text'
            className={`form-control${this.state.newFieldValid ? '' : ' invalid'}`}
            placeholder={'Type a new field name...'}
            value={this.state.newField}
            onChange={this.onNewFieldChange} />
          <div className='input-group-append'>
            <button
              className={`btn btn-${addFieldDisabled ? 'default' : 'success'}`}
              disabled={addFieldDisabled}
              onClick={this.onAddField}>
              <i className='fas fa-plus' />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

DatabaseEditorCollection.propTypes = {
  collectionId: PropTypes.string.isRequired,
  collectionFields: PropTypes.arrayOf(PropTypes.string.isRequired),

  collections: PropTypes.arrayOf(PropTypes.string.isRequired),

  onChangeCollection: PropTypes.func.isRequired,
  onDeleteCollection: PropTypes.func.isRequired,

  onAddField: PropTypes.func.isRequired
}

DatabaseEditorCollection.defaultProps = {
  collections: [],
  collectionFields: []
}

export default DatabaseEditorCollection
