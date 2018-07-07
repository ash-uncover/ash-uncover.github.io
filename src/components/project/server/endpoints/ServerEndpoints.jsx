import React from 'react'
import PropTypes from 'prop-types'

import ServerEntityContainer from './ServerEntityContainer'

import './_server-entities.scss'

class ServerEntities extends React.Component {
  constructor () {
    super(...arguments)

    this.state = {
      newEntity: '',
      newEntityValid: true
    }

    this.onNewEntityChange = this.onNewEntityChange.bind(this)
    this.onCreateEntity = this.onCreateEntity.bind(this)
    this.buildEntity = this.buildEntity.bind(this)
  }

  /* VIEW CALLBACKS */

  onNewEntityChange (event) {
    this.setState({
      newEntity: event.target.value,
      newEntityValid: this.props.entities.indexOf(event.target.value) === -1
    })
  }

  onCreateEntity () {
    if (this.state.newEntityValid) {
      this.props.onAddEntity(this.state.newEntity)
      this.setState({ newEntity: '' })
    }
  }

  /* RENDERING */

  buildEntity (entityId, index) {
    return (
      <ServerEntityContainer
        key={index}
        entityId={entityId} />
    )
  }

  render () {
    let disabled = !this.state.newEntity || !this.state.newEntityValid
    return (
      <div className='server-entities'>
        <h2>{'Server endpoints'}</h2>
        { this.props.entities.map(this.buildEntity) }
        <div className='input-group mb-3'>
          <input
            type='text'
            className={`form-control${this.state.newEntityValid ? '' : ' invalid'}`}
            placeholder={'Specify entity name...'}
            value={this.state.newEntity}
            onChange={this.onNewEntityChange} />
          <div className='input-group-append'>
            <button
              type='button'
              className={`btn btn-${disabled ? 'default' : 'primary'}`}
              disabled={disabled}
              onClick={this.onCreateEntity}>
              {'Add entity'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

ServerEntities.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.string),

  onAddEntity: PropTypes.func.isRequired
}

ServerEntities.defaultProps = {
  entities: []
}

export default ServerEntities
