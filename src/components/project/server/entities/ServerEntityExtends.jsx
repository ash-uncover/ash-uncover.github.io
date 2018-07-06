import React from 'react'
import PropTypes from 'prop-types'

import './_server-entities.scss'

const DEFAULT_EXTEND = ''

class ServerEntityExtends extends React.Component {
  constructor () {
    super(...arguments)

    this.state = {
      newExtend: DEFAULT_EXTEND
    }

    this.onNewExtendChange = this.onNewExtendChange.bind(this)
    this.onAddExtend = this.onAddExtend.bind(this)
    this.getExtendDeleter = this.getExtendDeleter.bind(this)

    this.buildExtend = this.buildExtend.bind(this)
    this.buildExtends = this.buildExtends.bind(this)
  }

  /* VIEW CALBACKS */

  onNewExtendChange (event) {
    this.setState({
      newExtend: event.target.value
    })
  }

  onAddExtend () {
    this.props.onAddEntityExtend(this.state.newExtend)
    this.setState({
      newExtend: DEFAULT_EXTEND
    })
  }

  getExtendDeleter (extendId) {
    return () => {
      this.props.onRemoveEntityExtend(extendId)
    }
  }

  /* RENDERING */

  buildExtend (extendId, index) {
    return (
      <div key={`extends-${index}`} className='input-group mb-3'>
        <span className={`form-control`}>
          {extendId}
        </span>
        <div className='input-group-append'>
          <button
            className={`btn btn-danger`}
            onClick={this.getExtendDeleter(extendId)}>
            {'Remove extend'}
          </button>
        </div>
      </div>
    )
  }

  buildExtends () {
    const result = [DEFAULT_EXTEND].concat(this.props.extends)
    return result.map((e) => (
      <option key={e}>{e}</option>
    ))
  }

  render () {
    const addExtendDisabled = !this.state.newExtend
    return (
      <div className='server-entity-extends'>
        <h5>{`Extends (${this.props.entityExtends.length})`}</h5>
        { this.props.entityExtends.map(this.buildExtend) }
        <div className='input-group mb-3'>
          <select
            className='form-control'
            id='form-field-extend'
            value={this.state.newExtend}
            onChange={this.onNewExtendChange}>
            { this.buildExtends() }
          </select>
          <div className='input-group-append'>
            <button
              className={`btn btn-${addExtendDisabled ? 'default' : 'success'}`}
              disabled={addExtendDisabled}
              onClick={this.onAddExtend}>
              {'Add Extend'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

ServerEntityExtends.propTypes = {
  entityId: PropTypes.string.isRequired,
  entityExtends: PropTypes.arrayOf(PropTypes.string.isRequired),

  extends: PropTypes.arrayOf(PropTypes.string.isRequired),

  onAddEntityExtend: PropTypes.func.isRequired,
  onRemoveEntityExtend: PropTypes.func.isRequired
}

ServerEntityExtends.defaultProps = {
  entityExtends: [],
  extends: []
}

export default ServerEntityExtends
