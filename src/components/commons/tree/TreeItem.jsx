import React from 'react'
import PropTypes from 'prop-types'

import './_tree.scss'

class TreeItem extends React.Component {

    constructor() {
        super(...arguments)

        this.state = {
            expanded: this.props.expanded
        }

        this.toggleExpand = this.toggleExpand.bind(this)
        this.buildItem = this.buildItem.bind(this)
    }

    /* VIEW CALLBACKS */

    toggleExpand(event) {
        event.stopPropagation()
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }))
    }

    /* RENDERING */

    get className() {
        let result = 'tree-item'
        if (this.props.items.length === 0) result += ' no-items'
        if (this.state.expanded) result += ' expand'
        return result
    }

    buildIcon() {
        if (this.props.items.length) {
            if (this.state.expanded) {
                return (
                    <button className='tree-item-button' onClick={this.toggleExpand}>
                        <i className='far fa-minus-square'/>
                    </button>
                )
            } 
            return (
                <button className='tree-item-button' onClick={this.toggleExpand}>
                    <i className='far fa-plus-square' />
                </button>
            )
        }
        return (
            <button className='tree-item-button'>
                <i className='fas fa-circle' />
            </button>
        )
    }

    buildItem(item, index) {
        return <TreeItem key={item.id} {...item} />
    }

    render() {
        return (
            <div className={this.className}>
                <div className='tree-item-details' onClick={this.props.onClick}>
                    {this.buildIcon()}
                    <span className='tree-item-name' >
                        {this.props.name}
                    </span>
                </div>
                <div className='tree-item-items'>
                    {this.props.items.map(this.buildItem)}
                </div>
            </div>
        )
    }
}

TreeItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    expanded: PropTypes.bool,
    items: PropTypes.array,
    onClick: PropTypes.func
}

TreeItem.defaultProps = {
    expanded: false,
    items: [],
    onClick: () => {}
}

export default TreeItem