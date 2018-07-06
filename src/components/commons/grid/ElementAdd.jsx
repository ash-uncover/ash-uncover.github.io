import React from 'react'
// Registries

import './_layout.scss'

class ElementAdd extends React.Component {
  /* VIEW CALLBACKS */

  /* RENDERING */
  render () {
    return (
      <div className='element-add'>
        <div className='element-add-inner'>
          {'+'}
        </div>
      </div>
    )
  }
}

ElementAdd.propTypes = {
}

ElementAdd.defaultProps = {
}

export default ElementAdd
