import React from 'react'
import PropTypes from 'prop-types'
// Registries
import ComponentRegistry from 'core/ComponentRegistry'

import './_app.scss'

class App extends React.Component {

    render() {
        return (
            <div className='app'>
                <ComponentRegistry.Grid size={48} />
            </div>
        )
    }
}

ComponentRegistry.register(App, 'App')

App.propTypes = {
}

App.defaultProps = {
}

export default App