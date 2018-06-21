import React from 'react'
import PropTypes from 'prop-types'

import './_layout-elements.scss'

class ElementGridRow extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* VIEW CALLBACKS */


    /* RENDERING */

    render() {
        return (
            <div className='row element-grid-row'>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
                <div className='col-1 element-grid-col'/>
            </div>
        )
    }
}

ElementGridRow.propTypes = {
}

ElementGridRow.defaultProps = {
}

export default ElementGridRow