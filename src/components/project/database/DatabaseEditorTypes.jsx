import React from 'react'
import PropTypes from 'prop-types'

import FormInput from '../../commons/form/FormInput'
import DatabaseEditorTypeContainer from './DatabaseEditorTypeContainer';

import './_database.scss'

class DatabaseEditorTypes extends React.Component {

    constructor() {
        super(...arguments)
        
        this.state = {
            newType: '',
            newTypeValid: true
        }

        this.onNewTypeChange = this.onNewTypeChange.bind(this)
        this.onCreateType = this.onCreateType.bind(this)
        this.buildType = this.buildType.bind(this)
    }

    /* VIEW CALLBACKS */

    onNewTypeChange(event) {
        this.setState({ 
            newType: event.target.value,
            newTypeValid: this.props.types.indexOf(event.target.value) === -1
        })
    }

    onCreateType() {
        if (this.state.newTypeValid) {
            this.props.onAddType(this.state.newType)
            this.setState({ newType: '' })
        }
    }

    /* RENDERING */

    buildType(id, index) {
        return (
            <DatabaseEditorTypeContainer 
                key={index} 
                id={id}  />
        )
    }

    render() {
        let disabled = !this.state.newType || !this.state.newTypeValid
        return (
            <div className='database-editor-types'>
                { this.props.types.map(this.buildType) }
                <div className='input-group mb-3'>
                    <input 
                        type='text' 
                        className={`form-control${this.state.newTypeValid ? '' : ' invalid'}`}
                        placeholder={'Specify type...'}
                        value={ this.state.newType }
                        onChange={this.onNewTypeChange} />
                    <div className='input-group-append'>
                        <button
                            className={`btn btn-${disabled ? 'default' : 'primary'}`}
                            disabled={disabled}
                            onClick={this.onCreateType}>
                            {'Add type'}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

DatabaseEditorTypes.propTypes = {
    types: PropTypes.arrayOf(PropTypes.string),

    onAddType: PropTypes.func.isRequired,
    onDeleteType: PropTypes.func.isRequired
}

DatabaseEditorTypes.defaultProps = {
    types: []
}

export default DatabaseEditorTypes