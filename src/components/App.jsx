import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AppToolbar from 'components/AppToolbar'
import AppTest from 'components/AppTest'
import AppHomeContainer from 'components/AppHomeContainer'
import ProjectContainer from './project/ProjectContainer'

import './_app.scss'

class App extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='app'>
        <AppToolbar />
        <div className='app-content'>
          <Switch>
            <Route exact path='/'>
              <AppHomeContainer />
            </Route>
            <Route path='/project'>
              <ProjectContainer />
            </Route>
            <Route exact path='/test'>
              <AppTest />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

App.propTypes = {
}

App.defaultProps = {
}

export default App
