import React from 'react'
import PropTypes from 'prop-types'

import './_layout.scss'

class LayoutBuilderMenu extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* VIEW CALLBACKS */


    /* RENDERING */

    render() {
        return (
            <div className='layout-builder-menu'>
                <div>square</div>
            </div>
        )
    }
}

LayoutBuilderMenu.propTypes = {
}

LayoutBuilderMenu.defaultProps = {
}

export default LayoutBuilderMenu