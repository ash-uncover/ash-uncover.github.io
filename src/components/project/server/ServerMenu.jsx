import React from 'react'

import Tree from 'components/commons/tree/Tree'

import './_server.scss'

class ServerMenu extends React.Component {
  constructor () {
    super(...arguments)

    this.onClickSettings = this.onClickSettings.bind(this)
    this.onClickEntities = this.onClickEntities.bind(this)
    this.getEntityClicker = this.getEntityClicker.bind(this)
    this.onClickEntity = this.onClickEntity.bind(this)
    this.onClickEndpoints = this.onClickEndpoints.bind(this)
    this.buildEntitiesItems = this.buildEntitiesItems.bind(this)
  }

  get items () {
    return [
      { id: 'settings', name: 'Settings', onClick: this.onClickSettings },
      { id: 'entities', name: 'Entities', onClick: this.onClickEntities, items: this.props.entities.map(this.buildEntitiesItems) },
      { id: 'endpoints', name: 'Endpoints', onClick: this.onClickEndpoints }
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

  onClickEndpoints () {
    this.props.onNavigate('/project/server/endpoints')
  }

  buildEntitiesItems (entity) {
    return {id: entity, name: entity, onClick: this.getEntityClicker(entity)}
  }

  /* RENDERING */

  render () {
    return (
      <div className='server-menu'>
        <div className='title'>
                    Server
        </div>
        <div className='items'>
          <div className='server-menu-item'>
            <i className={`icon ${this.props.src}`} />
            <span className='text'>{this.props.name}</span>
          </div>
          <Tree items={this.items} />
        </div>
      </div>
    )
  }
}

ServerMenu.propTypes = {
}

ServerMenu.defaultProps = {
}

export default ServerMenu
