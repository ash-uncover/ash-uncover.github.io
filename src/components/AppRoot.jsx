import React from 'react'
import PropTypes from 'prop-types'

import App from './App'

import './_app.scss'

class AppRoot extends React.Component {
  /* LIFECYCLE */

  componentWillMount () {
    this.props.history.push(this.props.url)
    this.checkLoad(this.props)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.url !== this.props.url) {
      this.props.history.push(newProps.url)
    }
    this.checkLoad(newProps)
  }

  checkLoad (props) {
    if (!props.dataTypesLoadingError && !props.dataTypesLoaded && !props.dataTypesLoading) {
      props.onLoadDataTypes()
    }
    if (!props.dataModulesLoadingError && !props.dataModulesLoaded && !props.dataModulesLoading) {
      props.onLoadDataModules()
    }
    if (!props.dataSampleLoadingError && !props.dataSampleLoaded && !props.dataSampleLoading) {
      props.onLoadDataSample()
    }
  }

  /* RENDERING */

  renderError () {
    return <div>Error</div>
  }

  renderLoading () {
    return <div>Loading</div>
  }

  render () {
    if (this.props.dataTypesLoadingError ||
            this.props.dataModulesLoadingError ||
            this.props.dataSampleLoadingError) {
      return this.renderError()
    }
    if (!this.props.dataTypesLoaded ||
            !this.props.dataModulesLoaded ||
            !this.props.dataSampleLoaded) {
      return this.renderLoading()
    }
    return (
      <App />
    )
  }
}

AppRoot.propTypes = {
  url: PropTypes.string,

  dataTypesLoaded: PropTypes.number.isRequired,
  dataTypesLoading: PropTypes.bool.isRequired,
  dataTypesLoadingError: PropTypes.string.isRequired,

  dataModulesLoaded: PropTypes.number.isRequired,
  dataModulesLoading: PropTypes.bool.isRequired,
  dataModulesLoadingError: PropTypes.string.isRequired,

  dataSampleLoaded: PropTypes.number.isRequired,
  dataSampleLoading: PropTypes.bool.isRequired,
  dataSampleLoadingError: PropTypes.string.isRequired,

  onLoadDataTypes: PropTypes.func.isRequired,
  onLoadDataModules: PropTypes.func.isRequired,
  onLoadDataSample: PropTypes.func.isRequired
}

AppRoot.defaultProps = {
  url: '/'
}

export default AppRoot
