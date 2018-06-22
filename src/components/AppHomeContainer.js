import { connect } from 'react-redux'
import ActionRegistry from 'core/ActionRegistry'

import AppHome from 'components/AppHome'

export const mapStateToProps = (state, ownProps) => {
    const props = {
        busy: state.model.loading
    }
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onNavigate: (link) => {
            dispatch(ActionRegistry.appNavigate(link))
        },
        onLoadModelRequest: () => {
            dispatch(ActionRegistry.loadModelRequest())
        },
        onLoadModelSuccess: (model) => {
            dispatch(ActionRegistry.loadModelSuccess(model))
        },
        onLoadModelFailure: (error) => {
            console.log(error)
            dispatch(ActionRegistry.loadModelFailure(error))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHome)
