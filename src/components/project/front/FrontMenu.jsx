import React from 'react'
import PropTypes from 'prop-types'

import Tree from 'components/commons/tree/Tree'

import './_front.scss'

const TREE_ITEMS = [
    { id: 'item1', name: 'item 1', items: [
        { id: 'item11', name: 'item 11' },
        { id: 'item12', name: 'item 12' },
        { id: 'item13', name: 'item 13' }
    ]},
    { id: 'item2', name: 'item 2' }
]

class FrontMenu extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='front-menu'>
                <div className='title'>
                    Front
                </div>
                <Tree items={TREE_ITEMS} />
            </div>
        )
    }
}

FrontMenu.propTypes = {
}

FrontMenu.defaultProps = {
}

export default FrontMenu