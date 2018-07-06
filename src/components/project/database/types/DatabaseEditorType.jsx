import React from 'react'
import PropTypes from 'prop-types'

import './_database-types.scss'

class DatabaseEditorType extends React.Component {
  constructor () {
    super(...arguments)

    this.state = {
      newValue: '',
      newValueValid: true,

      type: this.props.id,
      typeValid: true
    }

    this.onChangeType = this.onChangeType.bind(this)
    this.onDeleteType = this.onDeleteType.bind(this)

    this.onNewValueChange = this.onNewValueChange.bind(this)
    this.onAddValue = this.onAddValue.bind(this)

    this.buildValue = this.buildValue.bind(this)
  }

  /* LIFECYLCLE */

  componentWillReceiveProps (props) {
    this.state.type = props.id
  }

  /* VIEW CALBACKS */

  onChangeType (event) {
    const type = event.target.value
    const isValid = !!type && this.props.types.indexOf(type) === -1
    this.setState({
      type: type,
      typeValid: isValid
    })
    if (isValid) {
      this.props.onChangeType(event.target.value)
    }
  }
  onDeleteType () {
    this.props.onDeleteType()
  }

  onNewValueChange (event) {
    this.setState({
      newValue: event.target.value,
      newValueValid: this.props.values.indexOf(event.target.value) === -1
    })
  }

  onAddValue () {
    this.props.onAddValue(this.state.newValue)
    this.setState({ newValue: '' })
  }
  getValueChanger (index) {
    return (event) => {
      this.props.onChangeValue(index, event.target.value)
    }
  }
  getValueDeleter (value) {
    return () => {
      this.props.onDeleteValue(value)
    }
  }

  /* RENDERING */

  buildValue (value, index) {
    const isValid = !!value && (this.props.values.filter(v => v === value).length === 1)
    return (
      <form key={`value-${index}`} className='input-group mb-3 type-value'>
        <input
          type='text'
          className={`form-control${isValid ? '' : ' invalid'}`}
          value={value}
          onChange={this.getValueChanger(index)} />
        <div className='input-group-append'>
          <button
            className={`btn btn-danger`}
            onClick={this.getValueDeleter(value)}>
            <i className='fas fa-times' />
          </button>
        </div>
      </form>
    )
  }

  render () {
    const addValueDisabled = !this.state.newValue || !this.state.newValueValid
    return (
      <div className='database-editor-type'>
        <h5>{`Type`}</h5>
        <div className='input-group mb-3'>
          <input
            type='text'
            className={`form-control${this.state.typeValid ? '' : ' invalid'}`}
            placeholder={'Specify type...'}
            value={this.state.type}
            onChange={this.onChangeType} />
          <div className='input-group-append'>
            <button
              className={`btn btn-danger`}
              onClick={this.onDeleteType}>
              {'Delete type'}
            </button>
          </div>
        </div>

        <h5>{`Values (${this.props.values.length})`}</h5>
        { this.props.values.map(this.buildValue) }
        <div className='input-group mb-3'>
          <input
            type='text'
            className={`form-control${this.state.newValueValid ? '' : ' invalid'}`}
            placeholder={'Type a new value...'}
            value={this.state.newValue}
            onChange={this.onNewValueChange} />
          <div className='input-group-append'>
            <button
              className={`btn btn-${addValueDisabled ? 'default' : 'success'}`}
              disabled={addValueDisabled}
              onClick={this.onAddValue}>
              <i className='fas fa-plus' />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

DatabaseEditorType.propTypes = {
  id: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string.isRequired),
  values: PropTypes.arrayOf(PropTypes.string.isRequired),

  onChangeType: PropTypes.func.isRequired,
  onDeleteType: PropTypes.func.isRequired,

  onAddValue: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onDeleteValue: PropTypes.func.isRequired
}

DatabaseEditorType.defaultProps = {
  values: []
}

export default DatabaseEditorType
