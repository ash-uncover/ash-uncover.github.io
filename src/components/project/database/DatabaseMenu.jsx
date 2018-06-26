import React from 'react'
import PropTypes from 'prop-types'

import Tree from 'components/commons/tree/Tree'

import './_database.scss'

class DatabaseMenu extends React.Component {

    constructor() {
        super(...arguments)
        this.onClickSettings = this.onClickSettings.bind(this)
        this.onClickTypes = this.onClickTypes.bind(this)
        this.onClickCollections = this.onClickCollections.bind(this)
    }

    get items () {
        return [
            { id: 'settings', name: 'Settings', onClick: this.onClickSettings },
            { id: 'types', name: 'Types', onClick: this.onClickTypes, items: [
                { id: 'item11', name: 'item 11' },
                { id: 'item12', name: 'item 12' },
                { id: 'item13', name: 'item 13' }
            ]},
            { id: 'item2', name: 'item 2', onClick: this.onClickCollections }
        ]
    }

    /* VIEW CALLBACKS */

    onClickSettings() {
        this.props.onNavigate('/project/database/settings')
    }

    onClickTypes() {
        this.props.onNavigate('/project/database/types')
    }

    onClickCollections() {
        this.props.onNavigate('/project/database/collections')
    }

    /* RENDERING */

    render() {
        return (
            <div className='database-menu'>
                <div className='title'>
                    Database
                </div>
                <Tree items={this.items} />
            </div>
        )
    }
}

DatabaseMenu.propTypes = {
}

DatabaseMenu.defaultProps = {
}

export default DatabaseMenu