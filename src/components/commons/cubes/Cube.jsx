import React from 'react'
import PropTypes from 'prop-types'

import CubeFace from './CubeFace'

import './_cubes.scss'

class Cube extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='cube'>
        <CubeFace color={this.props.colorFaceTop} />
        <CubeFace color={this.props.colorFaceLeft} />
        <CubeFace color={this.props.colorFaceRight} />
      </div>
    )
  }
}

Cube.propTypes = {
  colorFaceTop: PropTypes.string,
  colorFaceLeft: PropTypes.string,
  colorFaceRight: PropTypes.string
}

Cube.defaultProps = {
  colorFaceTop: 'black',
  colorFaceLeft: 'black',
  colorFaceRight: 'black'
}

export default Cube
