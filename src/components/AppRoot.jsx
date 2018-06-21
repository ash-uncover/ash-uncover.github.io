import React from 'react'
import PropTypes from 'prop-types'

import App from './App'

import './_app.scss'

class AppRoot extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* LIFECYCLE */

    componentWillMount() {
        this.props.history.push(this.props.url)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.url !== this.props.url) {
            this.props.history.push(newProps.url)
        }
    }

    /* RENDERING */

    render() {
        return (
            <App />
        )
    }
}

AppRoot.propTypes = {
}

AppRoot.defaultProps = {
}

export default AppRoot