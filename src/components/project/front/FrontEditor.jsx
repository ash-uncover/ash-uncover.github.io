import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import ModelFormInputContainer from '../ModelFormInputContainer'
import ModelFormSwitchContainer from '../ModelFormSwitchContainer'

import FrontSettings from './settings/FrontSettings'

import './_front.scss'

class FrontEditor extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='front-editor'>
                <Switch>
                    <Route exact path='/project/front'>
                       <FrontSettings />
                    </Route>
                    <Route path='/project/front/settings'>
                        <FrontSettings />
                    </Route>
                    <Route path='/project/front/components'>
                        <h2>Front components</h2>
                    </Route>
                </Switch>
            </div>
        )
    }
}

FrontEditor.propTypes = {
}

FrontEditor.defaultProps = {
}

export default FrontEditor