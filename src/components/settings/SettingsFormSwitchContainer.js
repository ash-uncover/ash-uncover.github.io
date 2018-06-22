import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

import FormSwitch from 'components/commons/form/FormSwitch'

export const mapStateToProps = (state, ownProps) => {
    const elements = ownProps.id.split('.')
    const value = elements.reduce((result, e) => {
        return result[e]
    }, state.model)
    console.log(ownProps)
    console.log(value)
    const props = {
        id: ownProps.id,
        label: ownProps.name,
        edit: ownProps.edit,
        checked: value
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: (id, value) => {
            dispatch(ActionRegistry.updateModel(ownProps.id, value))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormSwitch)
