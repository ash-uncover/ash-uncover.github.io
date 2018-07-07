import React from 'react'

import './_layout.scss'

class LayoutBuilderToolbar extends React.Component {
  /* VIEW CALLBACKS */

  /* RENDERING */

  render () {
    return (
      <div className='layout-builder-toolbar col-12'>
        <button type='button' className='btn btn-primary'>{'xs'}</button>
        <button type='button' className='btn btn-primary'>{'sm'}</button>
        <button type='button' className='btn btn-primary'>{'md'}</button>
        <button type='button' className='btn btn-primary'>{'lg'}</button>
        <button type='button' className='btn btn-primary'>{'xl'}</button>
      </div>
    )
  }
}

LayoutBuilderToolbar.propTypes = {
}

LayoutBuilderToolbar.defaultProps = {
}

export default LayoutBuilderToolbar
