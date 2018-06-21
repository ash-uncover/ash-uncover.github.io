import { connect } from 'react-redux'
import ActionRegistry from 'core/ActionRegistry'
import AppMenuItem from 'components/AppMenuItem'

export const mapStateToProps = (state, ownProps) => {
    const props = Object.assign({}, ownProps)
    props.selected = state.app.router.currentUrl === ownProps.link
    return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onNavigate: () => {
            dispatch(ActionRegistry.appNavigate(ownProps.link))
        },
    }
}

const ContainerAppMenuItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppMenuItem)

export default ContainerAppMenuItem
