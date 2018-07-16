import React from 'react'

import Cube from 'components/commons/cubes/Cube'

import './_app.scss'

class AppTest extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='app-test'>
        <div>
          <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
        </div>
        <div>
          <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
        </div>
        <div>
          <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
          <Cube colorFaceTop='Teal' colorFaceLeft='Orange' colorFaceRight='Purple' />
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
