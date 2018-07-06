import React from 'react'
import PropTypes from 'prop-types'

import ServerMenuContainer from './ServerMenuContainer'
import ServerEditor from './ServerEditor'

import './_server.scss'

class Server extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='server'>
                <ServerMenuContainer />
                <ServerEditor />
            </div>
        )
    }
}

Server.propTypes = {
}

Server.defaultProps = {
}

export default Server