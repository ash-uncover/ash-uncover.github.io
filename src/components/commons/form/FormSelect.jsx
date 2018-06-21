import React from 'react'
import PropTypes from 'prop-types'

import ComponentRegistry from 'registries/ComponentRegistry'

import './_form.scss'

class FormSelect extends React.Component {

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

    buildOption(v) {
        return (
            <option key={v.key} value={v.key}>{v.value || v.key}</option>
        )
    }

    render() {
        return (
            <div className='form form-select'>
                {this.buildLabel()}
                <select
                    id={this.props.id}
                    className='form-control'
                    disabled={!this.props.edit}
                    value={this.state.value}
                    onChange={this.onChange}
                    onBlur={this.onBlur}>
                    {this.props.values.map(this.buildOption)}
                </select>
            </div>
        )
    }
}

ComponentRegistry.register(FormSelect, 'FormSelect')

FormSelect.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    edit: PropTypes.bool,
    value: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.string
    })),

    onBlur: PropTypes.func,
    onChange: PropTypes.func
}

FormSelect.defaultProps = {
    label: '',
    edit: false,
    value: '',
    values: [],

    onBlur: null,
    onChange: null
}

export default FormSelect
