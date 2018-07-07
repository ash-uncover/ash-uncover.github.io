import React from 'react'
import PropTypes from 'prop-types'

import ServerEntityCustomContainer from './ServerEntityCustomContainer'

import './_server-entities.scss'

class ServerEntityCustoms extends React.Component {
  constructor () {
    super(...arguments)

    this.state = {
      newCustom: '',
      newCustomValid: true
    }

    this.onNewCustomChange = this.onNewCustomChange.bind(this)
    this.onCreateCustom = this.onCreateCustom.bind(this)

    this.buildParent = this.buildParent.bind(this)
    this.buildCustom = this.buildCustom.bind(this)
  }

  /* VIEW CALBACKS */

  onNewCustomChange (event) {
    const value = event.target.value
    this.setState({
      newCustom: value,
      newCustomValid: this.props.idRestrictions.indexOf(value) === -1
    })
  }

  onCreateCustom () {
    this.props.onCreateCustom(this.state.newCustom)
    this.setState({ newCustom: '' })
  }

  /* RENDERING */

  buildParent (parentId, index) {
    return (
      <div
        className='input-group'
        key={`${this.props.entityId}-custom-parent-${index}`}>
        <span className={`form-control`}>
          {parentId}
        </span>
      </div>
    )
  }

  buildCustom (customId, index) {
    return (
      <ServerEntityCustomContainer
        key={`${this.props.entityId}-custom-${index}`}
        entityId={this.props.entityId}
        customId={customId} />
    )
  }

  render () {
    const addCustomDisabled = !this.state.newCustom || !this.state.newCustomValid
    return (
      <div className='server-entity-customs'>
        <h5>{`Custom Fields (${this.props.entityCustoms.length + this.props.parentCustoms.length})`}</h5>
        { this.props.parentCustoms.length
          ? [
            <h6 key='title'>{`Parent custom Fields (${this.props.parentCustoms.length})`}</h6>,
            this.props.parentCustoms.map(this.buildParent)
          ] : null }
        { this.props.entityCustoms.length
          ? [
            <h6 key='title'>{`Own custom Fields (${this.props.entityCustoms.length})`}</h6>,
            this.props.entityCustoms.map(this.buildCustom)
          ] : null }
        <div className='input-group mb-3'>
          <input
            type='text'
            className={`form-control${this.state.newCustomValid ? '' : ' invalid'}`}
            placeholder={'Type custom field name...'}
            value={this.state.newCustom}
            onChange={this.onNewCustomChange} />
          <div className='input-group-append'>
            <button
              type='button'
              className={`btn btn-${addCustomDisabled ? 'default' : 'success'}`}
              disabled={addCustomDisabled}
              onClick={this.onCreateCustom}>
              {'Add custom field'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

ServerEntityCustoms.propTypes = {
  entityId: PropTypes.string.isRequired,
  entityCustoms: PropTypes.arrayOf(PropTypes.string.isRequired),
  parentCustoms: PropTypes.arrayOf(PropTypes.string.isRequired),

  idRestrictions: PropTypes.arrayOf(PropTypes.string.isRequired),

  onCreateCustom: PropTypes.func.isRequired
}

ServerEntityCustoms.defaultProps = {
  entityCustoms: [],
  parentCustoms: [],
  idRestrictions: []
}

export default ServerEntityCustoms
