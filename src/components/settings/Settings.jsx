import React from 'react'
import PropTypes from 'prop-types'

import SettingsMenu from 'components/settings/SettingsMenu';
import SettingsEditor from 'components/settings/SettingsEditor';

import './_settings.scss'

class Settings extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='settings'>
                <SettingsMenu />
                <SettingsEditor />
            </div>
        )
    }
}

Settings.propTypes = {
}

Settings.defaultProps = {
}

export default Settings