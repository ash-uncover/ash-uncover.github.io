import React from 'react'
import PropTypes from 'prop-types'

import './_server-entities.scss'

class ServerEntityCustom extends React.Component {
  constructor () {
    super(...arguments)

    this.state = {}

    this.onChangeCustomId = this.onChangeCustomId.bind(this)
    this.onChangeCustomType = this.onChangeCustomType.bind(this)

    this.onDelete = this.onDelete.bind(this)
  }

  /* LIFECYCLE */

  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps')
    return {
      customId: props.customId,
      customType: props.customType,
      customIdValid: true
    }
  }

  /* VIEW CALBACKS */

  onChangeCustomId (event) {
    const customId = event.target.value
    const customIdValid = Boolean(customId) && this.props.idRestrictions.indexOf(customId) === -1
    console.log(this.props)
    console.log(customId)
    console.log(customIdValid)
    this.setState({ customId, customIdValid })
    if (customIdValid) {
      this.props.onUpdate({
        id: customId,
        type: this.state.customType
      })
    }
  }

  onChangeCustomType (event) {
    const customType = event.target.value
    this.setState({ customType })
    if (this.state.customIdValid) {
      this.props.onUpdate({
        id: this.state.customId,
        type: customType
      })
    }
  }

  onDelete () {
    this.props.onDelete()
  }

  /* RENDERING */

  render () {
    return (
      <div className='server-entity-field'>
        <p>{`Custom field ${this.props.customId}`}</p>
        <div className='form-group row'>
          <label htmlFor='form-field-name' className='col-2 col-form-label'>
            {'Name'}
          </label>
          <div className='input-group col-10'>
            <input
              type='text'
              className={`form-control${this.state.customIdValid ? '' : ' invalid'}`}
              value={this.state.customId}
              onChange={this.onChangeCustomId} />
            <div className='input-group-append'>
              <button
                type='button'
                className={`btn btn-danger`}
                onClick={this.onDelete}>
                <i className='fas fa-times' />
              </button>
            </div>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='form-field-type' className='col-2 col-form-label'>
            {'Type'}
          </label>
          <div className='col-10'>
            <select
              className='form-control'
              id='form-field-type'
              value={this.state.customType}
              onChange={this.onChangeCustomType}>
              { this.props.typeRestrictions.map(type => <option key={type}>{type}</option>)}
            </select>
          </div>
        </div>
      </div>
    )
  }
}

ServerEntityCustom.propTypes = {
  customId: PropTypes.string.isRequired,

  idRestrictions: PropTypes.arrayOf(PropTypes.string.isRequired),
  customType: PropTypes.string.isRequired,

  typeRestrictions: PropTypes.arrayOf(PropTypes.string.isRequired),

  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
ServerEntityCustom.defaultProps = {
  idRestrictions: [],

  typeRestrictions: []
}

export default ServerEntityCustom
