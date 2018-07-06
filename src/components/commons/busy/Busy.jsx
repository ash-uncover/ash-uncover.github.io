import React from 'react'

import BusyBars from 'components/commons/busybars/BusyBars'

import './_busy.scss'

class Busy extends React.Component {
  /* LIFECYCLE */

  /* RENDERING */

  render () {
    return (
      <div className='busy'>
        <BusyBars />
      </div>
    )
  }
}

Busy.propTypes = {
}
Busy.defaultProps = {
}

export default Busy
