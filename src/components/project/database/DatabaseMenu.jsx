import React from 'react'
import PropTypes from 'prop-types'

import Tree from 'components/commons/tree/Tree'

import './_database.scss'

const TREE_ITEMS = [
    { id: 'item1', name: 'item 1', items: [
        { id: 'item11', name: 'item 11' },
        { id: 'item12', name: 'item 12' },
        { id: 'item13', name: 'item 13' }
    ]},
    { id: 'item2', name: 'item 2' }
]

class DatabaseMenu extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='database-menu'>
                <div className='title'>
                    Database
                </div>
                <Tree items={TREE_ITEMS} />
            </div>
        )
    }
}

DatabaseMenu.propTypes = {
}

DatabaseMenu.defaultProps = {
}

export default DatabaseMenu