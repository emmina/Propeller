import React, { Component } from 'react';
import { connect } from 'react-redux';

import Screen from '../../helpers/Screen';
import Project from './Project';
import { projectsActions } from '../../actions';

import './style.css';

class Projects extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(projectsActions.getProjects());
    }

    render() {
        const { projects } = this.props;

        return (
            <Screen active='projects'>
                <h2 className='title'>PROJECTS</h2>
                <div className='row justify-content-around projects'>
                    {projects.map(function (project, i) {
                        return <Project key={i} project={project} />
                    })}
                </div>
            </Screen>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getProjects } = state;

    return {
        projects: getProjects.projects === undefined ? [] : getProjects.projects.projects
    };
};

Projects = connect(mapStateToProps)(Projects);
export default Projects;