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
        this.onClickType = this.onClickType.bind(this)
        this.buildTypesItems = this.buildTypesItems.bind(this)
        this.getItemClicker = this.getItemClicker.bind(this)
    }

    get items () {
        return [
            { id: 'settings', name: 'Settings', onClick: this.onClickSettings },
            { id: 'types', name: 'Types', onClick: this.onClickTypes, items: this.props.types.map(this.buildTypesItems) },
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

    getItemClicker(id) {
        return () => {
            this.onClickType(id)
        }
    }

    onClickType(id) {
        this.props.onNavigate('/project/database/types/' + id)
    }

    onClickCollections() {
        this.props.onNavigate('/project/database/collections')
    }

    buildTypesItems(type) {
        return {id: type, name: type, onClick: this.getItemClicker(type)}
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
    types: PropTypes.arrayOf(PropTypes.string)
}

DatabaseMenu.defaultProps = {
    types: []
}

export default DatabaseMenu