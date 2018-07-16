import React from 'react'
import PropTypes from 'prop-types'

import './_cubes.scss'

class CubeFace extends React.Component {
  constructor () {
    super(...arguments)
    this.updateComponent = this._updateComponent.bind(this)
  }

  /* LIFECYCLE */

  componentDidMount () {
    this.updateComponent({
      color: this.props.color
    })
  }

  shouldComponentUpdate (props) {
    this.updateComponent({
      color: props.color
    })
    return false
  }

  _updateComponent (props) {
    // Color
    const color = props.color

    this.inner.style.background = color
  }

  /* RENDERING */

  render () {
    return (
      <div className='cube-face'>
        <div className='cube-face-inner' ref={c => { this.inner = c }} />
      </div>
    )
  }
}

CubeFace.propTypes = {
  color: PropTypes.string
}

CubeFace.defaultProps = {
  color: 'black'
}

export default CubeFace
