import React from 'react'
import PropTypes from 'prop-types'

import ProjectMenu from 'components/project/ProjectMenu';
import ProjectEditorContent from 'components/project/ProjectEditorContent';

import './_project.scss'

class ProjectEditor extends React.Component {

    constructor() {
        super(...arguments)
    }

    /* RENDERING */

    render() {
        return (
            <div className='project-editor'>
                <ProjectMenu />
                <ProjectEditorContent />
            </div>
        )
    }
}

ProjectEditor.propTypes = {
}

ProjectEditor.defaultProps = {
}

export default ProjectEditor