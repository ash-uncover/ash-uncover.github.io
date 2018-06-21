import React from 'react'
import PropTypes from 'prop-types'

import './_front.scss'

class FrontEditor extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='front-editor'>
                front
            </div>
        )
    }
}

FrontEditor.propTypes = {
}

FrontEditor.defaultProps = {
}

export default FrontEditor