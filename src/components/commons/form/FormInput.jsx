import React from 'react'
import PropTypes from 'prop-types'

import './_form.scss'

class FormInput extends React.Component {

    constructor() {
        super(...arguments)

        this.state = {
            value: this.props.value
        }

        this.onChange = this._onChange.bind(this)
        this.onBlur = this._onBlur.bind(this)
    }

    /* COMPONENT LIFECYCLE */

    componentWillReceiveProps(props) {
        this.setState({ value: props.value })
    }

    /* VIEW CALLBACKS */

    _onChange(event) {
        if (this.props.onChange) {
            this.props.onChange(this.props.id, event.target.value)
        } else {
            this.setState({
                value: event.target.value
            })
        }
    }

    _onBlur() {
        if (this.props.onBlur) {
            this.props.onBlur(this.props.id, this.state.value)
        }
    }

    /* RENDERING */

    buildLabel() {
        if (this.props.label) {
            return (
                <label className='form-label' htmlFor={this.props.id}>
                    {this.props.label}
                </label>
            )
        }
    }

    render() {
        return (
            <div className='form form-input'>
                {this.buildLabel()}
                <input
                    id={this.props.id}
                    className='form-control'
                    disabled={!this.props.edit}
                    value={this.state.value}
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.onChange}
                    onBlur={this.onBlur} />
            </div>
        )
    }

}

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    edit: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),
    type: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,

    onBlur: PropTypes.func,
    onChange: PropTypes.func
}

FormInput.defaultProps = {
    edit: false,
    label: '',
    value: '',
    type: 'text',
    min: undefined,
    max: undefined,

    onBlur: null,
    onChange: null
}

export default FormInput
