import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DatabaseSettings from './settings/DatabaseSettings'
import DatabaseEditorTypesContainer from './types/DatabaseEditorTypesContainer'
import DatabaseEditorTypeContainer from './types/DatabaseEditorTypeContainer'
import DatabaseEditorCollectionsContainer from './collections/DatabaseEditorCollectionsContainer'
import DatabaseEditorCollectionContainer from './collections/DatabaseEditorCollectionContainer'

import './_database.scss'

class DatabaseEditor extends React.Component {
  /* RENDERING */

  render () {
    return (
      <div className='database-editor'>
        <Switch>
          <Route exact path='/project/database'>
            <DatabaseSettings />
          </Route>
          <Route path='/project/database/settings'>
            <DatabaseSettings />
          </Route>
          <Route
            path='/project/database/types/:id'
            render={(props) => <DatabaseEditorTypeContainer id={props.match.params.id} />} />
          <Route path='/project/database/types'>
            <DatabaseEditorTypesContainer />
          </Route>
          <Route
            path='/project/database/collections/:id'
            render={(props) => <DatabaseEditorCollectionContainer id={props.match.params.id} />} />
          <Route path='/project/database/collections'>
            <DatabaseEditorCollectionsContainer />
          </Route>
        </Switch>
      </div>
    )
  }
}

DatabaseEditor.propTypes = {
}

DatabaseEditor.defaultProps = {
}

export default DatabaseEditor
