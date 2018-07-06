import React from 'react'
import PropTypes from 'prop-types'

import TreeItem from 'components/commons/tree/TreeItem'

import './_tree.scss'

class Tree extends React.Component {
  constructor () {
    super(...arguments)

    this.buildItem = this.buildItem.bind(this)
  }

  /* RENDERING */

  buildItem (item, index) {
    return (
      <TreeItem key={item.id} {...item} />
    )
  }

  render () {
    return (
      <div className='tree'>
        {this.props.items.map(this.buildItem)}
      </div>
    )
  }
}

Tree.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.array,
    onClick: PropTypes.func
  }))
}

Tree.defaultProps = {
  items: [],
  onClick: () => {}
}

export default Tree
