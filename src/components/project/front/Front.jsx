import React from 'react'
import PropTypes from 'prop-types'

import FrontEditor from './FrontEditor'
import FrontMenuContainer from './FrontMenuContainer'

import './_front.scss'

class Front extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='front-editor'>
                <FrontMenuContainer />
                <FrontEditor />
            </div>
        )
    }
}

Front.propTypes = {
}

Front.defaultProps = {
}

export default Front