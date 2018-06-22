import React from 'react'
import PropTypes from 'prop-types'

import './_server.scss'

class ServerEditor extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='server-editor'>
                <h2>Server settings</h2>
                <h2>Server endpoints</h2>
            </div>
        )
    }
}

ServerEditor.propTypes = {
}

ServerEditor.defaultProps = {
}

export default ServerEditor