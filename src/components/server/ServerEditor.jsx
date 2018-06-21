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
                server
            </div>
        )
    }
}

ServerEditor.propTypes = {
}

ServerEditor.defaultProps = {
}

export default ServerEditor