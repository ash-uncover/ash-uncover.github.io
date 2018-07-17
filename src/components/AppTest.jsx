import React from 'react'

import Cube from 'components/commons/cubes/Cube'

import './_app.scss'

class AppTest extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='app-test'>
        <div>
          <span className='cube-span cube-1-1'>
            <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          </span>
          <span className='cube-span cube-1-2'>
            <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          </span>
        </div>
        <div>
          <span className='cube-span cube-2-1'>
            <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          </span>
          <span className='cube-span cube-2-2'>
            <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          </span>
          <span className='cube-span cube-2-3'>
            <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          </span>
        </div>
        <div>
          <span className='cube-span cube-3-1'>
            <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          </span>
          <span className='cube-span cube-3-2'>
            <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          </span>
        </div>
      </div>
    )
  }
}

AppTest.propTypes = {
}

AppTest.defaultProps = {
}

export default AppTest
