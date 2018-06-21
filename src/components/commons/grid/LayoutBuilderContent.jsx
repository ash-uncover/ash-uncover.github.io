import React from 'react'
import PropTypes from 'prop-types'

import ElementGrid from './ElementGrid'

import './_layout.scss'

class LayoutBuilderContent extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* VIEW CALLBACKS */


    /* RENDERING */

    render() {
        return (
            <div className='layout-builder-content col-12'>
                <ElementGrid />
            </div>
        )
    }
}

LayoutBuilderContent.propTypes = {
}

LayoutBuilderContent.defaultProps = {
}

export default LayoutBuilderContent