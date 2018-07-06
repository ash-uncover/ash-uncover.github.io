import React from 'react'

import FrontEditor from './FrontEditor'
import FrontMenuContainer from './FrontMenuContainer'

import './_front.scss'

class Front extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='front-editor'>
        <FrontMenuContainer />
        <FrontEditor />
      </div>
    )
  }
}

Front.propTypes = {
}

Front.defaultProps = {
}

export default Front
