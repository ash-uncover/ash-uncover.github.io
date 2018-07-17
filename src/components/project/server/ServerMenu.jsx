import React from 'react'
import PropTypes from 'prop-types'

import Tree from 'components/commons/tree/Tree'

import './_server.scss'

class ServerMenu extends React.Component {
  constructor () {
    super(...arguments)

    this.onClickSettings = this.onClickSettings.bind(this)
    this.onClickEntities = this.onClickEntities.bind(this)
    this.getEntityClicker = this.getEntityClicker.bind(this)
    this.onClickEntity = this.onClickEntity.bind(this)
    this.onClickServlets = this.onClickServlets.bind(this)
    this.buildEntitiesItems = this.buildEntitiesItems.bind(this)
  }

  get items () {
    return [
      { id: 'settings', name: 'Settings', onClick: this.onClickSettings },
      { id: 'entities', name: 'Entities', onClick: this.onClickEntities, items: this.props.entities.map(this.buildEntitiesItems) },
      { id: 'servlets', name: 'Servlets', onClick: this.onClickServlets }
    ]
  }

  /* VIEW CALLBACKS */

  onClickSettings () {
    this.props.onNavigate('/project/server/settings')
  }

  onClickEntities () {
    this.props.onNavigate('/project/server/entities')
  }

  getEntityClicker (entityId) {
    return () => {
      this.onClickEntity(entityId)
    }
  }

  onClickEntity (entityId) {
    this.props.onNavigate('/project/server/entities/' + entityId)
  }

  onClickServlets () {
    this.props.onNavigate('/project/server/servlets')
  }

  buildEntitiesItems (entity) {
    return {id: entity, name: entity, onClick: this.getEntityClicker(entity)}
  }

  /* RENDERING */

  render () {
    return (
      <div className='server-menu'>
        <div className='title'>
          {'Server'}
        </div>
        <div className='items'>
          <Tree items={this.items} />
        </div>
      </div>
    )
  }
}

ServerMenu.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.string.isRequired),

  onNavigate: PropTypes.func.isRequired
}

ServerMenu.defaultProps = {
  entities: []
}

export default ServerMenu
