import React from 'react'

import DatabaseEditor from './DatabaseEditor'
import DatabaseMenuContainer from './DatabaseMenuContainer'

import './_database.scss'

class Database extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='database'>
        <DatabaseMenuContainer />
        <DatabaseEditor />
      </div>
    )
  }
}

Database.propTypes = {
}

Database.defaultProps = {
}

export default Database
