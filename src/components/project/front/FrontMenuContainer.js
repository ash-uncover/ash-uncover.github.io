import { connect } from 'react-redux'
import ActionRegistry from 'core/ActionRegistry'
import FrontMenu from './FrontMenu'

import HelperRegistry from '../../../core/HelperRegistry'

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

const FrontMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FrontMenu)

export default FrontMenuContainer
