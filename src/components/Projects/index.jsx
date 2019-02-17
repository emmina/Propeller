import React, { Component } from 'react';
import { connect } from 'react-redux';

import Screen from '../../helpers/Screen';
import Project from './Project';
import projects from '../../data/projects';

import './style.css';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: projects
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;

        //dispatch(projectsActions.getMovies());
    }

    render() {
        //const { projects } = this.props;
        const { projects } = this.state;
        console.log(projects)

        return (
            <Screen active='projects'>
                <h2 className='title'>PROJECTS</h2>
                <div className='row justify-content-around projects'>
                {projects.map(project => <Project project={project}/>)}
                </div>
            </Screen>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { projects } = state;

    return {
        //projects: projects.projects
    };
};

Projects = connect(mapStateToProps)(Projects);
export default Projects;