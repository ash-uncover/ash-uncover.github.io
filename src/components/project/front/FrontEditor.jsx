import React from 'react'
import { Switch, Route } from 'react-router-dom'

import FrontSettings from './settings/FrontSettings'

import './_front.scss'

class FrontEditor extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='front-editor'>
        <Switch>
          <Route exact path='/project/front'>
            <FrontSettings />
          </Route>
          <Route path='/project/front/settings'>
            <FrontSettings />
          </Route>
          <Route path='/project/front/components'>
            <h2>Front components</h2>
          </Route>
        </Switch>
      </div>
    )
  }
}

FrontEditor.propTypes = {
}

FrontEditor.defaultProps = {
}

export default FrontEditor
