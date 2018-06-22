import React from 'react'
import PropTypes from 'prop-types'

import FrontMenu from './FrontMenu'

import './_front.scss'

class Front extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='front-editor'>
                <FrontMenu />
            </div>
        )
    }
}

Front.propTypes = {
}

Front.defaultProps = {
}

export default Front