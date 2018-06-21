import React from 'react'
import PropTypes from 'prop-types'

import DatabaseMenu from 'components/database/DatabaseMenu'

import './_database.scss'

class DatabaseEditor extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='database-editor'>
                <DatabaseMenu />
            </div>
        )
    }
}

DatabaseEditor.propTypes = {
}

DatabaseEditor.defaultProps = {
}

export default DatabaseEditor