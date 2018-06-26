import { connect } from 'react-redux'
import ActionRegistry from 'core/ActionRegistry'
import DatabaseMenu from './DatabaseMenu'

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

const DatabaseMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DatabaseMenu)

export default DatabaseMenuContainer
