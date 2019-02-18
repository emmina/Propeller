import React, { PureComponent } from 'react';

class Project extends PureComponent {
    render() {
        const { project } = this.props;

        return (
            <img className='col-2 project-image' src={project.url} alt="project"/>
        )
    }
}

export default Project;