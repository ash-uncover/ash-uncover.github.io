import React from 'react'
import PropTypes from 'prop-types'

import DatabaseEditor from './DatabaseEditor'
import DatabaseMenu from './DatabaseMenu'

import './_database.scss'

class Database extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='database'>
                <DatabaseMenu />
                <DatabaseEditor />
            </div>
        )
    }
}

Database.propTypes = {
}

Database.defaultProps = {
}

export default Database