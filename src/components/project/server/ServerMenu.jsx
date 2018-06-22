import React from 'react'
import PropTypes from 'prop-types'

import Tree from 'components/commons/tree/Tree'

import './_server.scss'

const TREE_ITEMS = [
    { id: 'item1', name: 'item 1', items: [
        { id: 'item11', name: 'item 11' },
        { id: 'item12', name: 'item 12' },
        { id: 'item13', name: 'item 13' }
    ]},
    { id: 'item2', name: 'item 2' }
]

class ServerMenu extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='server-menu'>
                <div className='title'>
                    Server
                </div>
                <div className='items'>
                    <div className='server-menu-item'>
                        <i className={`icon ${this.props.src}`} />
                        <span className='text'>{this.props.name}</span>
                    </div>
                    <Tree items={TREE_ITEMS} />
                </div>
            </div>
        )
    }
}

ServerMenu.propTypes = {
}

ServerMenu.defaultProps = {
}

export default ServerMenu