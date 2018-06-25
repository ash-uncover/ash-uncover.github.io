import React from 'react'
import PropTypes from 'prop-types'

import './_database-collections.scss'

class DatabaseEditorCollectionField extends React.Component {

    constructor() {
        super(...arguments)

        this.state = {
            fieldId: this.props.fieldId,
            fieldType: this.props.fieldType,
            fieldIsArray: this.props.fieldIsArray,
            
            fieldIdValid: true
        }
        
        this.onBlurFieldId = this.onBlurFieldId.bind(this)
        
        this.onChangeFieldId = this.onChangeFieldId.bind(this)
        this.onChangeFieldType = this.onChangeFieldType.bind(this)
        this.onChangeFieldIsArray = this.onChangeFieldIsArray.bind(this)

        this.onDeleteField = this.onDeleteField.bind(this)
    }

    /* LIFECYLCLE */

    componentWillReceiveProps(props) {
        this.state.fieldId = props.fieldId
        this.state.fieldType = this.props.fieldType
        this.state.fieldIsArray = this.props.fieldIsArray
    } 

    /* VIEW CALBACKS */

    onBlurFieldId() {
        if (!this.state.fieldIdValid) {
            this.inputFieldId.focus()
        }
    }
    onChangeFieldId(event) {
        const id = event.target.value
        const valid = !!id && (this.props.fields.indexOf(id) === -1 || this.props.fieldId === id)
        this.setState({ 
            fieldId: id,
            fieldIdValid: valid
        })
        if (valid) {
            this.props.onChangeField({
                id: id,
                type: this.state.fieldType,
                isArray: this.state.fieldIsArray
            })
        }
    }
    onChangeFieldType(event) {
        const type = event.target.value
        this.setState({ fieldType: type })
        if (this.state.fieldIdValid) {
            this.props.onChangeField({
                id: this.state.fieldId,
                type: type,
                isArray: this.state.fieldIsArray
            })
        }
    }
    onChangeFieldIsArray(event) {
        const isArray = event.target.checked
        this.setState({ fieldIsArray: isArray })
        if (this.state.fieldIdValid) {
            this.props.onChangeField({
                id: this.state.fieldId,
                type: this.state.fieldType,
                isArray: isArray
            })
        }
    }

    onDeleteField() {
        this.props.onDeleteField()
    }

    /* RENDERING */

    buildFieldTitle() {
        return `Field - ${this.props.fieldId}: ${this.props.fieldType}${this.props.fieldIsArray ? '[]' : ''}`
    }

    render() {
        return (
            <div className='database-editor-collection-field'>
                <h6>{this.buildFieldTitle()}</h6>
                <div className='form-group row'>
                    <label htmlFor='form-field-name' className='col-2 col-form-label'>
                        {'Name'}
                    </label>
                    <div className='input-group col-10'>
                        <input 
                            type='text' 
                            id='form-field-name'
                            className={`form-control${this.state.fieldIdValid ? '' : ' invalid'}`}
                            placeholder={'Field name...'}
                            value={ this.state.fieldId }
                            ref={c => this.inputFieldId = c}
                            onChange={this.onChangeFieldId}
                            onBlur={this.onBlurFieldId} />
                        <div className='input-group-append'>
                            <button
                                className={`btn btn-danger`}
                                onClick={this.onDeleteField}>
                                {'Delete field'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='form-group row'>
                    <label htmlFor='form-field-type' className='col-2 col-form-label'>
                        {'Type'}
                    </label>
                    <div className='col-10'>
                        <select 
                            className='form-control' 
                            id='form-field-type' 
                            value={this.state.fieldType}
                            onChange={this.onChangeFieldType}>
                            { this.props.fieldTypes.map(type => <option key={type}>{type}</option>)}
                        </select>
                    </div>
                </div>

                <div className='form-group'>
                    <div className='form-check'>
                        <input 
                            id='form-field-isarray'
                            className='form-check-input' 
                            type='checkbox' 
                            checked={this.state.fieldIsArray}
                            onChange={this.onChangeFieldIsArray} />
                        <label
                            htmlFor='form-field-isarray'
                            className='form-check-label'>
                            {'Is Array'}
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

DatabaseEditorCollectionField.propTypes = {
    fieldId: PropTypes.string.isRequired,
    fieldType: PropTypes.string.isRequired,
    fieldIsArray: PropTypes.bool.isRequired,

    fieldTypes: PropTypes.arrayOf(PropTypes.string.isRequired),
    fields: PropTypes.arrayOf(PropTypes.string.isRequired),

    onChangeField: PropTypes.func.isRequired,
    onDeleteField: PropTypes.func.isRequired
}

DatabaseEditorCollectionField.defaultProps = {
    fieldTypes: [],
    fields: []
}

export default DatabaseEditorCollectionField