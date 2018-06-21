import React from 'react'
import PropTypes from 'prop-types'

import ComponentRegistry from 'registries/ComponentRegistry'

import './_form.scss'

class FormTextArea extends React.Component {

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
            <div className='form form-textarea'>
                {this.buildLabel()}
                <textarea
                    id={this.props.id}
                    className='form-control'
                    disabled={!this.props.edit}
                    value={this.state.value}
                    rows={this.props.rows}
                    onChange={this.onChange}
                    onBlur={this.onBlur} />
            </div>
        )
    }

}

ComponentRegistry.register(FormTextArea, 'FormTextArea')

FormTextArea.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    edit: PropTypes.bool,
    value: PropTypes.string,
    rows: PropTypes.number,

    onBlur: PropTypes.func,
    onChange: PropTypes.func
}

FormTextArea.defaultProps = {
    edit: false,
    label: '',
    value: '',
    rows: 3,

    onBlur: null,
    onChange: null
}

export default FormTextArea
