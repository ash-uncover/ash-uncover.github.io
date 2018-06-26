import React from 'react'
import PropTypes from 'prop-types'

import './_server-entities.scss'

class ServerEntity extends React.Component {

    constructor() {
        super(...arguments)
        
        this.state = {
            entityId: this.props.entityId,
            entityIdValid: true,

            newField: '',
            newField: true
        }

        this.onChangeEntity = this.onChangeEntity.bind(this)
        this.onDeleteEntity = this.onDeleteEntity.bind(this)

        this.onNewFieldChange = this.onNewFieldChange.bind(this)        
        this.onAddField = this.onAddField.bind(this)

        this.buildField = this.buildField.bind(this)
    }

    /* VIEW CALBACKS */

    onChangeEntity(event) {
        const type = event.target.value
        const isValid = !!type && this.props.types.indexOf(type) === -1
        this.setState({
            type: type,
            entityIdValid: isValid
        })
        if (isValid) {
            this.props.onChangeEntity(event.target.value)
        }
    }
    onDeleteEntity() {
        this.props.onDeleteEntity()
    }

    onNewFieldChange(event) {
        this.setState({ 
            newValue: event.target.value,
            newValueValid: this.props.values.indexOf(event.target.value) === -1
        })
    }

    onAddField() {
        this.props.onAddField(this.state.newValue)   
        this.setState({ newValue: '' })     
    }
    getValueChanger(index) {
        return (event) => {
            this.props.onChangeValue(index, event.target.value)
        }
    }
    getValueDeleter(value) {
        return () => {
            this.props.onDeleteValue(value)
        }
    }

    /* RENDERING */

    buildField(value, index) {
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
        const addValueDisabled = !this.state.newValue || !this.state.newValueValid
        return (
            <div className='server-entity'>
                <h5>{`Entity`}</h5>
                <div className='input-group mb-3'>
                    <input 
                        type='text' 
                        className={`form-control${this.state.entityIdValid ? '' : ' invalid'}`}
                        placeholder={'Specify entity name...'}
                        value={ this.state.entityId }
                        onChange={this.onChangeEntity} />
                    <div className='input-group-append'>
                        <button
                            className={`btn btn-danger`}
                            onClick={this.onDeleteEntity}>
                            {'Delete entity'}
                        </button>
                    </div>
                </div>
               
            </div>
        )
    }
}

/*

                <h5>{`Values (${this.props.values.length})`}</h5>
                { this.props.values.map(this.buildField) }
                <div className='input-group mb-3'>
                    <input 
                        type='text' 
                        className={`form-control${this.state.newValueValid ? '' : ' invalid'}`}
                        placeholder={'Type a new value...'}
                        value={this.state.newValue}
                        onChange={this.onNewFieldChange} />
                    <div className='input-group-append'>
                        <button
                            className={`btn btn-${addValueDisabled ? 'default' : 'success'}`}
                            disabled={addValueDisabled}
                            onClick={this.onAddField}>
                            <i className='fas fa-plus' />
                        </button>
                    </div>
                </div>
                */

ServerEntity.propTypes = {
    entityId: PropTypes.string.isRequired,

    entities: PropTypes.arrayOf(PropTypes.string.isRequired),
    fields: PropTypes.arrayOf(PropTypes.string.isRequired),

    onChangeEntity: PropTypes.func.isRequired,
    onDeleteEntity: PropTypes.func.isRequired
}

ServerEntity.defaultProps = {
    entities: [],
    fields: []
}

export default ServerEntity