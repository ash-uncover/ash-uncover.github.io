import React from 'react'
import PropTypes from 'prop-types'

import DatabaseEditor from './DatabaseEditor'
import DatabaseMenuContainer from './DatabaseMenuContainer'

import './_database.scss'

class Database extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='database'>
                <DatabaseMenuContainer />
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