import React from 'react'

import ElementGrid from './ElementGrid'

import './_layout.scss'

class LayoutBuilderContent extends React.Component {
  /* VIEW CALLBACKS */

  /* RENDERING */

  render () {
    return (
      <div className='layout-builder-content col-12'>
        <ElementGrid />
      </div>
    )
  }
}

LayoutBuilderContent.propTypes = {
}

LayoutBuilderContent.defaultProps = {
}

export default LayoutBuilderContent
