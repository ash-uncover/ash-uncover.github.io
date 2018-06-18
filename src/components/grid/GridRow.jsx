import React from 'react'
import PropTypes from 'prop-types'
// Registries
import ComponentRegistry from 'core/ComponentRegistry'

import './_grid.scss'

class GridRow extends React.Component {

    constructor() {
        super(...arguments)

        this.buildCells = this.buildCells.bind(this)
    }
    
    /* COMPONENT LIFECYLCLE */

    componentDidMount() {
        this.row.style.height = `calc(${100/this.props.size}vw - 5px)`
    }
    componentWillReceiveProps(props) {
        this.row.style.height = `calc(${100/props.size}vw - 5px)`
    }    

    /* RENDERING */

    buildCells() {
        const result =[]
        for (let i = 0; i < this.props.size; i++) {
            result.push(
                <ComponentRegistry.GridCell 
                    key={i} 
                    x={this.props.x} 
                    y={i}
                    onMouseDown={this.props.onMouseDown}
                    onMouseUp={this.props.onMouseUp}
                    onMouseEnter={this.props.onMouseEnter}
                    onMouseLeave={this.props.onMouseLeave} />
            )
        }
        return result
    }

    render() {
        return (
            <tr className='grid-row' ref={c => this.row = c}>
                {this.buildCells()}
            </tr>
        )
    }
}

ComponentRegistry.register(GridRow, 'GridRow')

GridRow.propTypes = {
    size: PropTypes.number,
    x: PropTypes.number.isRequired,

    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired
}

GridRow.defaultProps = {
    size: 12
}

export default GridRow