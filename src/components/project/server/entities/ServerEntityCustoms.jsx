import React from 'react'
import PropTypes from 'prop-types'

import ServerEntityFieldContainer from './ServerEntityCustomContainer'

import './_server-entities.scss'

class ServerEntityFields extends React.Component {

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
        const value = event.target.value
        this.setState({ 
            newField: value,
            newFieldValid: this.props.fields.indexOf(value) === -1
        })
    }

    onAddField() {
        this.props.onAddField(this.state.newField)   
        this.setState({ newField: '' })     
    }

    /* RENDERING */

    buildField(fieldId, index) {
        return (
            <ServerEntityFieldContainer
                key={`${this.props.entityId}-${index}`}
                entityId={this.props.entityId}
                fieldId={fieldId} />
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
                            {'Add field'}
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

    onAddField: PropTypes.func.isRequired
}

ServerEntityFields.defaultProps = {
    fields: []
}

export default ServerEntityFields