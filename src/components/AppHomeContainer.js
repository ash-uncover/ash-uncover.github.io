import { connect } from 'react-redux'
import ActionRegistry from 'core/ActionRegistry'

import AppHome from 'components/AppHome'

export const mapStateToProps = (state, ownProps) => {
    return {}
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onNavigate: (link) => {
            dispatch(ActionRegistry.appNavigate(link))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHome)
