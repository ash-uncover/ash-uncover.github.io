import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import FormInput from 'components/commons/form/FormInput'

export const mapStateToProps = (state, ownProps) => {
    const props = {
        id: ownProps.id,
        label: ownProps.name,
        edit: ownProps.edit,
        value: state.model.project.name
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
