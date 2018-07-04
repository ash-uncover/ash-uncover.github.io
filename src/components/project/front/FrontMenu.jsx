import React from 'react'
import PropTypes from 'prop-types'

import Tree from 'components/commons/tree/Tree'

import './_front.scss'

class FrontMenu extends React.Component {

    constructor() {
        super(...arguments)

        this.onClickSettings = this.onClickSettings.bind(this)
        this.onClickTypes = this.onClickTypes.bind(this)
    }

    get items () {
        return [
            { id: 'settings', name: 'Settings', onClick: this.onClickSettings },
            { id: 'components', name: 'Components', onClick: this.onClickTypes }        ]
    }

    /* VIEW CALLBACKS */

    onClickSettings() {
        this.props.onNavigate('/project/front/settings')
    }

    onClickTypes() {
        this.props.onNavigate('/project/front/components')
    }


    /* RENDERING */

    render() {
        return (
            <div className='front-menu'>
                <div className='title'>
                    Front
                </div>
                <Tree items={this.items} />
            </div>
        )
    }
}

FrontMenu.propTypes = {
}

FrontMenu.defaultProps = {
}

export default FrontMenu