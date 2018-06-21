import React from 'react'
import PropTypes from 'prop-types'
// Registries

import './_layout.scss'

class ElementAdd extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* VIEW CALLBACKS */


    /* RENDERING */
    render() {
        return (
            <div className='element-add'>
                <div className='element-add-inner'>
                    {'+'}
                </div>    
            </div>
        )
    }
}

ElementAdd.propTypes = {
}

ElementAdd.defaultProps = {
}

export default ElementAdd