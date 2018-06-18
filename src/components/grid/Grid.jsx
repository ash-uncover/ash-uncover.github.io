import React from 'react'
import PropTypes from 'prop-types'
// Registries
import ComponentRegistry from 'core/ComponentRegistry'

import './_grid.scss'

class Grid extends React.Component {

    constructor() {
        super(...arguments)

        this.buildRows = this.buildRows.bind(this)

        this.onMouseDown = this.onMouseDown.bind(this)
        this.onMouseUp = this.onMouseUp.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)

        this.onMouseDownCell = this.onMouseDownCell.bind(this)
        this.onMouseUpCell = this.onMouseUpCell.bind(this)
        this.onMouseEnterCell = this.onMouseEnterCell.bind(this)
        this.onMouseLeaveCell = this.onMouseLeaveCell.bind(this)
    }

    /* VIEW CALLBACKS */

    onMouseDown(event) {
        this.mouseStartPoint = {
            clientY: event.clientY,
            clientX: event.clientX
        }
        this.overlay.style.display = 'block'
        this.overlay.style.top = `${event.clientY}px`
        this.overlay.style.left = `${event.clientX}px`
        this.overlay.style.height = `0px`
        this.overlay.style.width = `0px`
    }
    onMouseUp(event) {
        this.overlay.style.display = 'none'
        delete this.mouseStartPoint
    }

    onMouseMove(event) {
        if (this.mouseStartPoint) {
            if (this.mouseStartPoint.clientY > event.clientY) {
                this.overlay.style.top = `${event.clientY}px`
                this.overlay.style.height = `${this.mouseStartPoint.clientY - event.clientY}px`
            } else {
                this.overlay.style.top = `${this.mouseStartPoint.clientY}px`
                this.overlay.style.height = `${event.clientY - this.mouseStartPoint.clientY}px`
            }
            if (this.mouseStartPoint.clientX > event.clientX) {
                this.overlay.style.left = `${event.clientX}px`
                this.overlay.style.width = `${this.mouseStartPoint.clientX - event.clientX}px`
            } else {
                this.overlay.style.left = `${this.mouseStartPoint.clientX}px`
                this.overlay.style.width = `${event.clientX - this.mouseStartPoint.clientX}px`
            }
        }
    }

    onMouseDownCell(cell, event) {
        this.cell = cell
        this.cellEvent = event
    }
    onMouseUpCell(cell, event) {
        this.cell = cell
        this.cellEvent = event
    }
    onMouseEnterCell(cell) {
        this.cell = cell
        this.cellEvent = event
    }
    onMouseLeaveCell(cell) {
        this.cell = cell
        this.cellEvent = event
    }

    /* RENDERING */

    buildRows() {
        const result = []
        for (let i = 0; i < this.props.size * 2; i++) {
            result.push(
                <ComponentRegistry.GridRow
                    key={i}
                    x={i}
                    size={this.props.size}
                    onMouseDown={this.onMouseDownCell}
                    onMouseUp={this.onMouseUpCell}
                    onMouseEnter={this.onMouseEnterCell}
                    onMouseLeave={this.onMouseLeaveCell} />
            )
        }
        return result
    }


    render() {
        return (
            <div className='grid'>
                <table 
                    className='grid-table'
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}
                    onMouseMove={this.onMouseMove}>
                    <tbody>
                        {this.buildRows()}
                    </tbody>
                </table>
                <div className='grid-overlay' ref={c => this.overlay = c} />
            </div>
        )
    }
}

ComponentRegistry.register(Grid, 'Grid')

Grid.propTypes = {
    size: PropTypes.number
}

Grid.defaultProps = {
    size: 12
}

export default Grid