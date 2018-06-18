import React from 'react'
import PropTypes from 'prop-types'
// Registries
import ComponentRegistry from 'core/ComponentRegistry'

import './_background.scss'

class Background extends React.Component {

    render() {
        return (
            <div className='background'>
                <div className='left'>
                    <div className='arrows'>
                        <div className='arrow small'></div><div className='arrow big'></div>
                    </div>
                    <div className='arrows'>
                        <div className='arrow small'></div><div className='arrow big'></div>
                    </div>
                    <div className='arrows'>
                        <div className='arrow small'></div><div className='arrow big'></div>
                    </div>
                </div>
                <div className='right'>
                </div>
            </div>
        )
    }
}

ComponentRegistry.register(Background, 'Background')

Background.propTypes = {
}

Background.defaultProps = {
}

export default Background