import { connect } from 'react-redux'
import ActionRegistry from 'core/ActionRegistry'

import AppHome from 'components/AppHome'

let sampleGetter

export const mapStateToProps = (state, ownProps) => {
  sampleGetter = () => state.data.sample
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
      dispatch(ActionRegistry.loadModelFailure(error))
    },
    onUseSample: () => {
      console.log(sampleGetter())
      dispatch(ActionRegistry.useSample(sampleGetter()))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHome)
