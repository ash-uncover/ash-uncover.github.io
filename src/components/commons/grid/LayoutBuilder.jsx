import React from 'react'
import PropTypes from 'prop-types'

import LayoutBuilderMenu from './LayoutBuilderMenu'
import LayoutBuilderToolbar from './LayoutBuilderToolbar'
import LayoutBuilderContent from './LayoutBuilderContent'

import './_layout.scss'

class LayoutBuilder extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* VIEW CALLBACKS */


    /* RENDERING */

    render() {
        return (
            <div className='layout-builder row'>
                <div className='col-3 layout-builder-menu-area'>
                    <LayoutBuilderMenu />
                </div>
                <div className='col-9'>
                    <div className='row'>
                        <LayoutBuilderToolbar />
                    </div>
                    <div className='row layout-builder-content-area'>
                        <LayoutBuilderContent />
                    </div>
                </div>
            </div>
        )
    }
}

LayoutBuilder.propTypes = {
}

LayoutBuilder.defaultProps = {
}

export default LayoutBuilder