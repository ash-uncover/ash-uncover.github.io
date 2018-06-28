import React from 'react'
import PropTypes from 'prop-types'

import './_server-entities.scss'

class ServerEntityFieldsFields extends React.Component {

    constructor() {
        super(...arguments)
        
        this.state = {
            newField: '',
            newFieldValid: true
        }

        this.onNewFieldChange = this.onNewFieldChange.bind(this)        
        this.onAddField = this.onAddField.bind(this)

        this.buildField = this.buildField.bind(this)
    }

    /* VIEW CALBACKS */

    onNewFieldChange(event) {
        this.setState({ 
            newField: event.target.value,
            newFieldValid: this.props.values.indexOf(event.target.value) === -1
        })
    }

    onAddField() {
        this.props.onAddField(this.state.newField)   
        this.setState({ newField: '' })     
    }

    /* RENDERING */

    buildField(field, index) {
        const isValid = !!value && (this.props.values.filter(v => v === value).length === 1)
        return (
            <div key={`value-${index}`} className='input-group mb-3 type-value'>
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
            </div>
        )
    }

    render() {
        const addFieldDisabled = !this.state.newField || !this.state.newFieldValid
        return (
            <div className='server-entity-fields'>
                <h5>{`Fields (${this.props.fields.length})`}</h5>
                { this.props.fields.map(this.buildField) }
                <div className='input-group mb-3'>
                    <input 
                        type='text' 
                        className={`form-control${this.state.newFieldValid ? '' : ' invalid'}`}
                        placeholder={'Type field name...'}
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

ServerEntityFields.propTypes = {
    entityId: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.string.isRequired),

    onChangeEntity: PropTypes.func.isRequired,
    onDeleteEntity: PropTypes.func.isRequired
}

ServerEntityFields.defaultProps = {
    fields: []
}

export default ServerEntityFields