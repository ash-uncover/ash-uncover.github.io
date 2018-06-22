import React from 'react'
import PropTypes from 'prop-types'

import SettingsMenuItem from './SettingsMenuItem'
import './_settings.scss'

const ITEMS = [
    { id: 'settings', name: 'Global settings', src: 'fas fa-cogs' },
    { id: 'modules', name: 'Modules', src: 'fas fa-th' }
]

class SettingsMenu extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    buildItem(item, index) {
        return (
            <SettingsMenuItem key={item.id} {...item} />
        )
    }

    render() {
        return (
            <div className='settings-menu'>
                <div className='title'>
                    Settings
                </div>
                <div className='items'>
                    {ITEMS.map(this.buildItem)}
                </div>
            </div>
        )
    }
}

SettingsMenu.propTypes = {
}

SettingsMenu.defaultProps = {
}

export default SettingsMenu