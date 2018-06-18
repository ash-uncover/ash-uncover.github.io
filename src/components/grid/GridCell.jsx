import React from 'react'
import PropTypes from 'prop-types'
// Registries
import ComponentRegistry from 'core/ComponentRegistry'

import './_grid.scss'

class GridCell extends React.Component {

    constructor() {
        super(...arguments)

        this.onMouseDown = this.onMouseDown.bind(this)
        this.onMouseUp = this.onMouseUp.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }
    
    /* VIEW CALLBACKS */

    onMouseDown(event) {
        this.props.onMouseDown({ x: this.props.x, y: this.props.y }, event)
    }
    onMouseUp(event) {
        this.props.onMouseUp({ x: this.props.x, y: this.props.y }, event)
    }
    onMouseEnter(event) {
        this.props.onMouseEnter({ x: this.props.x, y: this.props.y }, event)
    }
    onMouseLeave(event) {
        this.props.onMouseLeave({ x: this.props.x, y: this.props.y }, event)
    }

    /* RENDERING */

    render() {
        return (
            <td className='grid-cell' 
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}>
                <div className='grid-cell-content'>
                </div>
            </td>
        )
    }
}

ComponentRegistry.register(GridCell, 'GridCell')

GridCell.propTypes = {
    size: PropTypes.number,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,

    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired
}

GridCell.defaultProps = {
    size: 12
}

export default GridCell