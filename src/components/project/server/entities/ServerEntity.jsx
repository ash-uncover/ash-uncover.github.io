import React from 'react'
import PropTypes from 'prop-types'

import ServerEntityExtendsContainer from './ServerEntityExtendsContainer'
import ServerEntityFieldsContainer from './ServerEntityFieldsContainer'
import ServerEntityCustomsContainer from './ServerEntityCustomsContainer'

import './_server-entities.scss'

const NO_COLLECTION = 'NO_COLLECTION'

class ServerEntity extends React.Component {

    constructor() {
        super(...arguments)
        
        this.state = {
            entityId: this.props.entityId,
            entityIdValid: true,
            entityCollection: this.props.entityCollection || NO_COLLECTION
        }

        this.onDeleteEntity = this.onDeleteEntity.bind(this)
        
        this.onChangeEntityId = this.onChangeEntityId.bind(this)
        this.onChangeEntityCollection = this.onChangeEntityCollection.bind(this)
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

    /* RENDERING */

    buildCollections() {
        const collections = [NO_COLLECTION].concat(this.props.collections)
        return collections.map((collection) => (
            <option key={collection}>{collection}</option>
        ))
    }

    render() {
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

                <ServerEntityExtendsContainer entityId={this.props.entityId} />
                { this.props.entityCollection &&
                    <ServerEntityFieldsContainer entityId={this.props.entityId} />
                }
                <ServerEntityCustomsContainer entityId={this.props.entityId} />
                
            </div>
        )
    }
}
/*

                <ServerEntityCustomsContainer entityId={this.props.entityId} />
                */


ServerEntity.propTypes = {
    entityId: PropTypes.string.isRequired,
    entityCollection: PropTypes.string,
    
    entities: PropTypes.arrayOf(PropTypes.string.isRequired),
    collections: PropTypes.arrayOf(PropTypes.string.isRequired),

    onChangeEntity: PropTypes.func.isRequired,
    onDeleteEntity: PropTypes.func.isRequired
}

ServerEntity.defaultProps = {
    entities: [],
    entityCollection: 'NO_COLLECTION',
    collections: []
}

export default ServerEntity