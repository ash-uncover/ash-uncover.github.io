import React from 'react'

import './_busy-bars.scss'

class BusyBars extends React.Component {
  /* LIFECYCLE */

  /* RENDERING */

  render () {
    return (
      <div className='busy-bars' ref={(c) => { this.container = c }}>
        <div className='busy-bar busy-bar-1' ref={(c) => { this.bar1 = c }} />
        <div className='busy-bar busy-bar-2' ref={(c) => { this.bar2 = c }} />
        <div className='busy-bar busy-bar-3' ref={(c) => { this.bar3 = c }} />
        <div className='busy-bar busy-bar-4' ref={(c) => { this.bar4 = c }} />
        <div className='busy-bar busy-bar-5' ref={(c) => { this.bar5 = c }} />
      </div>
    )
  }
}

BusyBars.propTypes = {
}
BusyBars.defaultProps = {
}

export default BusyBars
