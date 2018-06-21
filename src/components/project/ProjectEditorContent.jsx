import React from 'react'
import PropTypes from 'prop-types'

import ProjectFormContainer from './ProjectFormInputContainer'
import FormSwitch from 'components/commons/form/FormSwitch'
import './_project.scss'

class ProjectEditorContent extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='project-editor-content'>
                
                <h2>Project Settings</h2>
                <ProjectFormContainer id='project.name' name='Project name' edit={true}/>
                
                <h2>Modules Settings</h2>
                
                <h3>Authentication module</h3>
                <FormSwitch label='use' id='modules.auth.use'/>
                
                <h3>Mail module</h3>
                <FormSwitch label='use' id='modules.mail.use'/>

                <h3>Googlemap module</h3>
                <FormSwitch label='use' id='modules.googlemap.use'/>
                
            </div>
        )
    }
}

ProjectEditorContent.propTypes = {
}

ProjectEditorContent.defaultProps = {
}

export default ProjectEditorContent