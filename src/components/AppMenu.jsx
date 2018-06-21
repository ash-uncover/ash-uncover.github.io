import React from 'react'
import PropTypes from 'prop-types'

import './_app.scss'
import AppMenuItemContainer from 'components/AppMenuItemContainer';

class AppMenu extends React.Component {

    constructor() {
        super(...arguments)

        this.buildItem = this.buildItem.bind(this)
    }

    /* RENDERING */

    buildItem(item, index) {
        return (
            <AppMenuItemContainer key={item.id} {...item} />
        )
    }

    render() {
        return (
            <div className='app-menu'>
                {this.props.items.map(this.buildItem)}
            </div>
        )
    }
}

AppMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }))
}

AppMenu.defaultProps = {
    items: []
}

export default AppMenu