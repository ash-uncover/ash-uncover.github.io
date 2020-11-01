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
    this.buildServletsItems = this.buildServletsItems.bind(this)
  }

  get items () {
    return [
      {
        id: 'settings',
        name: 'Settings',
        onClick: this.onClickSettings
      }, {
        id: 'entities',
        name: 'Entities',
        onClick: this.onClickEntities,
        items: this.props.entities.map(this.buildEntitiesItems)
      }, {
        id: 'servlets',
        name: 'Servlets',
        onClick: this.onClickServlets,
        items: this.props.servlets.map(this.buildServletsItems)
      }
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

  buildEntitiesItems (entity) {
    return {id: entity, name: entity, onClick: this.getEntityClicker(entity)}
  }

  onClickServlets () {
    this.props.onNavigate('/project/server/servlets')
  }

  getServletClicker (servletId) {
    return () => {
      this.onClickServlet(servletId)
    }
  }

  onClickServlet (servletId) {
    this.props.onNavigate('/project/server/servlets/' + servletId)
  }

  buildServletsItems (servlet) {
    return {id: servlet, name: servlet, onClick: this.getServletClicker(servlet)}
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
  servlets: PropTypes.arrayOf(PropTypes.string.isRequired),

  onNavigate: PropTypes.func.isRequired
}

ServerMenu.defaultProps = {
  entities: [],
  servlets: []
}

export default ServerMenu
