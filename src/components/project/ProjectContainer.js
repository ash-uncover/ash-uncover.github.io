import { connect } from 'react-redux'

import ActionRegistry from 'core/ActionRegistry'
import Project from './Project'

export const mapStateToProps = (state, ownProps) => {
  console.log(this)
  const props = {
    projectOpened: state.model.projectOpened,
    url: state.app.router.currentUrl
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBack: () => {
      dispatch(ActionRegistry.appNavigate('/'))
    }
  }
}

const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)

export default ProjectContainer
