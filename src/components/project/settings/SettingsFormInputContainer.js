import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import FormInput from 'components/commons/form/FormInput'

export const mapStateToProps = (state, ownProps) => {
    const elements = ownProps.id.split('.')
    const value = elements.reduce((result, e) => {
        return result[e]
    }, state.model)
    const props = {
        id: ownProps.id,
        label: ownProps.name,
        edit: ownProps.edit,
        value: value
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBlur: (id, value) => {
            dispatch(ActionRegistry.updateModel(ownProps.id, value))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormInput)
