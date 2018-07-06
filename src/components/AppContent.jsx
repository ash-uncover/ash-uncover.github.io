import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Project from 'components/project/Project'

import './_app.scss'

class AppContent extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='app-content'>
        <Switch>
          <Route
            exact
            path='/project'
            component={Project} />
        </Switch>
      </div>
    )
  }
}

AppContent.propTypes = {
}

AppContent.defaultProps = {
}

export default AppContent
