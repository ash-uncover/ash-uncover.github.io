import { connect } from 'react-redux'
import ActionRegistry from 'core/ActionRegistry'
import ProjectMenuItem from './ProjectMenuItem'

export const mapStateToProps = (state, ownProps) => {
  const props = Object.assign({}, ownProps)
  props.selected = state.app.router.currentUrl === ownProps.link
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNavigate: () => {
      dispatch(ActionRegistry.appNavigate(ownProps.link))
    }
  }
}

const ContainerProjectMenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectMenuItem)

export default ContainerProjectMenuItem
