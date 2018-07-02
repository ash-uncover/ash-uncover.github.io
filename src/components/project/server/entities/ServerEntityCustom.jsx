import React from 'react'
import PropTypes from 'prop-types'

import './_server-entities.scss'

class ServerEntityField extends React.Component {

    constructor() {
        super(...arguments)
        
        this.state = {
            entityId: this.props.entityId,
            
            fieldId: this.props.fieldId,
            fieldKind: this.props.fieldKind,
            
            fieldIdValid: true
        }

        this.onChangeFieldId = this.onChangeFieldId.bind(this)
        this.onDeleteField = this.onDeleteField.bind(this)
    }

    /* LIFECYCLE */

    componentWillReceiveProps(props) {
        if (this.state.fieldId !== props.fieldId) {
            this.state.fieldId = props.fieldId
        }
    }

    /* VIEW CALBACKS */

    onChangeFieldId(event) {
        const fieldId = event.target.value
        const fieldIdValid = !!fieldId && this.props.fields.indexOf(fieldId) === -1
        this.setState({ fieldId, fieldIdValid })
        if (fieldIdValid) {
            this.props.onChangeField({
                id: fieldId
            })
        }
    }
    onDeleteField() {
        this.props.onDeleteField()
    }

    /* RENDERING */

    render() {
        return (
            <div className='server-entity-field'>
                <h5>{`Field ${this.props.fieldId}`}</h5>
                <div className='input-group mb-3 type-value'>
                    <input 
                        type='text' 
                        className={`form-control${this.state.fieldIdValid ? '' : ' invalid'}`}
                        value={this.state.fieldId}
                        onChange={this.onChangeFieldId} />
                    <div className='input-group-append'>
                        <button
                            className={`btn btn-danger`}
                            onClick={this.onDeleteField}>
                            <i className='fas fa-times' />
                        </button>
                    </div>
                </div> 
            </div>
        )
    }
}

ServerEntityField.propTypes = {
    entityId: PropTypes.string.isRequired,
    fieldId: PropTypes.string.isRequired,

    fields: PropTypes.arrayOf(PropTypes.string.isRequired),

    onChangeField: PropTypes.func.isRequired,
    onDeleteField: PropTypes.func.isRequired
}

ServerEntityField.defaultProps = {
    fields: []
}

export default ServerEntityField