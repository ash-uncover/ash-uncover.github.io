import React from 'react'
import PropTypes from 'prop-types'

import './_server-entities.scss'

const DEFAULT_FIELD = ''

class ServerEntityFields extends React.Component {
  constructor () {
    super(...arguments)

    this.state = {
      newField: DEFAULT_FIELD
    }

    this.onNewFieldChange = this.onNewFieldChange.bind(this)
    this.onAddField = this.onAddField.bind(this)
    this.getFieldDeleter = this.getFieldDeleter.bind(this)

    this.buildField = this.buildField.bind(this)
    this.buildFields = this.buildFields.bind(this)
  }

  /* VIEW CALBACKS */

  onNewFieldChange (event) {
    this.setState({
      newField: event.target.value
    })
  }

  onAddField () {
    this.props.onAddEntityField(this.state.newField)
    this.setState({
      newField: DEFAULT_FIELD
    })
  }

  getFieldDeleter (fieldId) {
    return () => {
      this.props.onRemoveEntityField(fieldId)
    }
  }

  /* RENDERING */

  buildParent (parentId, index) {
    return (
      <div key={`fields-parents-${index}`} className='input-group'>
        <span className={`form-control`}>
          {parentId}
        </span>
      </div>
    )
  }

  buildField (fieldId, index) {
    return (
      <div key={`fields-${index}`} className='input-group mb-3'>
        <span className={`form-control`}>
          {fieldId}
        </span>
        <div className='input-group-append'>
          <button
            className={`btn btn-danger`}
            onClick={this.getFieldDeleter(fieldId)}>
            {'Remove field'}
          </button>
        </div>
      </div>
    )
  }

  buildFields () {
    const result = [DEFAULT_FIELD].concat(this.props.fields)
    return result.map((f) => (
      <option key={f}>{f}</option>
    ))
  }

  render () {
    const addFieldDisabled = !this.state.newField
    return (
      <div className='server-entity-fields'>
        <h5>{`Collection Fields (${this.props.entityFields.length + this.props.parentFields.length})`}</h5>
        { this.props.parentFields.length
          ? <div>
            <h6>{`Parent Fields  (${this.props.parentFields.length})`}</h6>
            { this.props.parentFields.map(this.buildParent) }
          </div>
          : null }
        { this.props.entityFields.length
          ? <div>
            <h6>{`Own Fields  (${this.props.entityFields.length})`}</h6>
            { this.props.entityFields.map(this.buildField) }
          </div>
          : null }
        <div className='input-group mb-3'>
          <select
            className='form-control'
            id='form-field-extend'
            value={this.state.newField}
            onChange={this.onNewFieldChange}>
            { this.buildFields() }
          </select>
          <div className='input-group-append'>
            <button
              className={`btn btn-${addFieldDisabled ? 'default' : 'success'}`}
              disabled={addFieldDisabled}
              onClick={this.onAddField}>
              {'Add Field'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

ServerEntityFields.propTypes = {
  entityId: PropTypes.string.isRequired,
  entityFields: PropTypes.arrayOf(PropTypes.string.isRequired),

  parentFields: PropTypes.arrayOf(PropTypes.string.isRequired),

  fields: PropTypes.arrayOf(PropTypes.string.isRequired),

  onAddEntityField: PropTypes.func.isRequired,
  onRemoveEntityField: PropTypes.func.isRequired
}

ServerEntityFields.defaultProps = {
  entityFields: [],
  parentFields: [],
  fields: []
}

export default ServerEntityFields
