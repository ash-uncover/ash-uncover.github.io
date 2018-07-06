import React from 'react'
import PropTypes from 'prop-types'

import ElementGridRow from './ElementGridRow'

import './_layout-elements.scss'

class ElementGrid extends React.Component {
  /* VIEW CALLBACKS */

  /* RENDERING */

  buildRows () {
    const result = []
    for (let i = 0; i < this.props.rows; i++) {
      result.push(<ElementGridRow key={i} />)
    }
    return result
  }

  render () {
    return (
      <div className='row element-grid'>
        <div className='col-12'>
          {this.buildRows()}
        </div>
      </div>
    )
  }
}

ElementGrid.propTypes = {
  rows: PropTypes.number
}

ElementGrid.defaultProps = {
  rows: 2
}

export default ElementGrid
