import React from 'react'
import PropTypes from 'prop-types'

import ServerMenu from 'components/server/ServerMenu'
import ServerEditor from 'components/server/ServerEditor'

import './_server.scss'

class Server extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='server'>
                <ServerMenu />
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