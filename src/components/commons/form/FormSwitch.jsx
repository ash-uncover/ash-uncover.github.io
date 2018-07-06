import React from 'react'
import PropTypes from 'prop-types'

import './_form.scss'

class FormSwitch extends React.Component {
  constructor () {
    super(...arguments)

    this.state = {
      checked: this.props.checked
    }

    this.onChange = this._onChange.bind(this)
    this.onBlur = this._onBlur.bind(this)
  }

  /* COMPONENT LIFECYCLE */

  componentWillReceiveProps (props) {
    this.setState({ checked: props.checked })
  }

  /* VIEW CALLBACKS */

  _onChange (event) {
    if (this.props.onChange) {
      this.props.onChange(this.props.id, event.target.checked)
    } else {
      this.setState({
        checked: event.target.checked
      })
    }
  }

  _onBlur () {
    if (this.props.onBlur) {
      this.props.onBlur(this.props.id, this.state.checked)
    }
  }

  /* RENDERING */

  buildLabel () {
    if (this.props.label) {
      return (
        <label className='form-label' htmlFor={this.props.id}>
          {this.props.label}
        </label>
      )
    }
  }

  render () {
    return (
      <div className='form form-switch'>
        {this.buildLabel()}
        <label className='switch'>
          <input
            id={this.props.id}
            className='switch-input'
            type={this.props.type}
            checked={this.state.checked}
            disabled={!this.props.edit}
            onChange={this.onChange}
            onBlur={this.onBlur} />
          <span className='slider round' />
        </label>
      </div>
    )
  }
}

FormSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  edit: PropTypes.bool,
  type: PropTypes.string,
  checked: PropTypes.bool,

  onBlur: PropTypes.func,
  onChange: PropTypes.func
}

FormSwitch.defaultProps = {
  label: '',
  edit: false,
  type: 'checkbox',
  checked: false,

  onBlur: null,
  onChange: null
}

export default FormSwitch
