import React from 'react'
import PropTypes from 'prop-types'

import Tree from 'components/commons/tree/Tree'

import './_database.scss'

class DatabaseMenu extends React.Component {

    constructor() {
        super(...arguments)
        this.onClickSettings = this.onClickSettings.bind(this)
        this.onClickTypes = this.onClickTypes.bind(this)
        this.onClickType = this.onClickType.bind(this)
        this.getTypeClicker = this.getTypeClicker.bind(this)
        this.onClickCollections = this.onClickCollections.bind(this)
        this.onClickCollection = this.onClickCollection.bind(this)
        this.getCollectionClicker = this.getCollectionClicker.bind(this)
        this.buildTypesItems = this.buildTypesItems.bind(this)
        this.buildCollectionsItems = this.buildCollectionsItems.bind(this)
    }

    get items () {
        return [
            { id: 'settings', name: 'Settings', onClick: this.onClickSettings },
            { id: 'types', name: 'Types', onClick: this.onClickTypes, items: this.props.types.map(this.buildTypesItems) },
            { id: 'collections', name: 'Collections', onClick: this.onClickCollections, items: this.props.collections.map(this.buildCollectionsItems) }
        ]
    }

    /* VIEW CALLBACKS */

    onClickSettings() {
        this.props.onNavigate('/project/database/settings')
    }

    onClickTypes() {
        this.props.onNavigate('/project/database/types')
    }

    getTypeClicker(id) {
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

    getCollectionClicker(id) {
        return () => {
            this.onClickCollection(id)
        }
    }

    onClickCollection(id) {
        this.props.onNavigate('/project/database/collections/' + id)
    }

    buildTypesItems(type) {
        return {id: type, name: type, onClick: this.getTypeClicker(type)}
    }

    buildCollectionsItems(collection) {
        return {id: collection, name: collection, onClick: this.getCollectionClicker(collection)}
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