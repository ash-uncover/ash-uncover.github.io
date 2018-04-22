import React from 'react'
import PropTypes from 'prop-types'
// Registries
import ComponentRegistry from 'core/ComponentRegistry'

import './_background.scss'

class Background extends React.Component {

    render() {
        return (
            <div class='background'>
                <div class='left'>
                    <div class='arrows'>
                        <div class='arrow small'></div><div class='arrow big'></div>
                    </div>
                    <div class='arrows'>
                        <div class='arrow small'></div><div class='arrow big'></div>
                    </div>
                    <div class='arrows'>
                        <div class='arrow small'></div><div class='arrow big'></div>
                    </div>
                </div>
                <div class='right'>
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