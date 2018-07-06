import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import HelperRegistry from '../core/HelperRegistry'

import AppRoot from 'components/AppRoot'

export const mapStateToProps = (state, ownProps, history) => {
  const props = {
    dataTypesLoaded: state.data.typesLoaded,
    dataTypesLoading: state.data.typesLoading,
    dataTypesLoadingError: state.data.typesLoadingError,

    dataModulesLoaded: state.data.modulesLoaded,
    dataModulesLoading: state.data.modulesLoading,
    dataModulesLoadingError: state.data.modulesLoadingError,

    dataSampleLoaded: state.data.sampleLoaded,
    dataSampleLoading: state.data.sampleLoading,
    dataSampleLoadingError: state.data.sampleLoadingError,

    url: state.app.router.currentUrl
  }
  return props
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadDataTypes: () => HelperRegistry.Action.loadDataTypes(dispatch),
  onLoadDataModules: () => HelperRegistry.Action.loadDataModules(dispatch),
  onLoadDataSample: () => HelperRegistry.Action.loadDataSample(dispatch)
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRoot))
