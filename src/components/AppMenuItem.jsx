import React from 'react'
import PropTypes from 'prop-types'

import './_app.scss'

class AppMenuItem extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    get className() {
        let result = 'app-menu-item'
        if (this.props.selected) result += ' selected'
        return result
    }
    render() {
        return (
            <div className={this.className} onClick={this.props.onNavigate}>
                <i className={`icon ${this.props.src}`} alt={this.props.name} />
            </div>
        )
    }
}

AppMenuItem.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    
    onNavigate: PropTypes.func.isRequired
}

AppMenuItem.defaultProps = {
}

export default AppMenuItem