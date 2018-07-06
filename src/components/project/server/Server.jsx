import React from 'react'

import ServerMenuContainer from './ServerMenuContainer'
import ServerEditor from './ServerEditor'

import './_server.scss'

class Server extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='server'>
        <ServerMenuContainer />
        <ServerEditor />
      </div>
    )
  }
}

Server.propTypes = {
}

Server.defaultProps = {
}

export default Server
