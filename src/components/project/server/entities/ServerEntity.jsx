import React from 'react'
import PropTypes from 'prop-types'

import './_server-entities.scss'

const NO_COLLECTION = 'NO_COLLECTION'

class ServerEntity extends React.Component {

    constructor() {
        super(...arguments)
        
        this.state = {
            entityId: this.props.entityId,
            entityIdValid: true,
            entityCollection: this.props.entityCollection || NO_COLLECTION,

            newField: '',
            newField: true
        }

        this.onDeleteEntity = this.onDeleteEntity.bind(this)
        
        this.onChangeEntityId = this.onChangeEntityId.bind(this)
        this.onChangeEntityCollection = this.onChangeEntityCollection.bind(this)

        this.onNewFieldChange = this.onNewFieldChange.bind(this)        
        this.onAddField = this.onAddField.bind(this)

        this.buildField = this.buildField.bind(this)
    }

    /* LIFECYCLE */

    componentWillReceiveProps(props) {
        this.state.id = props.entityId
        this.state.collection = props.entityCollection || NO_COLLECTION
    }

    /* VIEW CALBACKS */

    onChangeEntityId(event) {
        const entityId = event.target.value
        const isValid = !!entityId && this.props.entities.indexOf(entityId) === -1
        this.setState({
            entityId: entityId,
            entityIdValid: isValid
        })
        if (isValid) {
            this.props.onChangeEntity({
                id: entityId,
                collection: this.state.entityCollection
            })
        }
    }
    onChangeEntityCollection(event) {
        const value = event.target.value
        const entityCollection =  value === NO_COLLECTION ? '' : value
        this.setState({ entityCollection })
        if (this.state.entityIdValid) {
            this.props.onChangeEntity({
                id: this.state.entityId,
                collection: entityCollection
            })
        }
    }

    onDeleteEntity() {
        this.props.onDeleteEntity()
    }

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

    buildCollections() {
        const collections = [NO_COLLECTION].concat(this.props.collections)
        return collections.map((collection) => (
            <option key={collection}>{collection}</option>
        ))
    }

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
        const addFieldDisabled = !this.state.newField || !this.state.newFieldValid
        return (
            <div className='server-entity'>
                <h5>{`Entity - ${this.props.entityId} (${this.props.entityCollection || NO_COLLECTION})`}</h5>
                <div className='input-group mb-3'>
                    <input 
                        type='text' 
                        className={`form-control${this.state.entityIdValid ? '' : ' invalid'}`}
                        placeholder={'Specify entity name...'}
                        value={ this.state.entityId }
                        onChange={this.onChangeEntityId} />
                    <div className='input-group-append'>
                        <button
                            className={`btn btn-danger`}
                            onClick={this.onDeleteEntity}>
                            {'Delete entity'}
                        </button>
                    </div>
                </div>
                <div className='form-group row'>
                    <label htmlFor='form-field-type' className='col-2 col-form-label'>
                        {'Collection'}
                    </label>
                    <div className='col-10'>
                        <select 
                            className='form-control' 
                            id='form-field-type' 
                            value={this.state.entityCollection}
                            onChange={this.onChangeEntityCollection}>
                            { this.buildCollections() }
                        </select>
                    </div>
                </div>

                <h5>{`Fields (${this.props.fields.length})`}</h5>
                { this.props.fields.map(this.buildField) }
                <div className='input-group mb-3'>
                    <input 
                        type='text' 
                        className={`form-control${this.state.newFieldValid ? '' : ' invalid'}`}
                        placeholder={'Type a new value...'}
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

ServerEntity.propTypes = {
    entityId: PropTypes.string.isRequired,
    entityCollection: PropTypes.string,

    fields: PropTypes.arrayOf(PropTypes.string.isRequired),
    
    entities: PropTypes.arrayOf(PropTypes.string.isRequired),
    collections: PropTypes.arrayOf(PropTypes.string.isRequired),

    onChangeEntity: PropTypes.func.isRequired,
    onDeleteEntity: PropTypes.func.isRequired
}

ServerEntity.defaultProps = {
    entities: [],
    entityCollection: 'NO_COLLECTION',
    collections: [],
    fields: []
}

export default ServerEntity