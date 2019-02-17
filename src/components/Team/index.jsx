import React, { Component } from 'react';
import { connect } from 'react-redux';

import Screen from '../../helpers/Screen';
import TeamMember from './TeamMember';
import teamMembers from '../../data/teamMembers';

import './style.css';

class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team: teamMembers
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;

        //dispatch(teamActions.getMovies());
    }

    render() {
        //const { team } = this.props;
        const { team } = this.state;

        return (
            <Screen active='team'>
                <div className='row team'>
                {team.map(member => <TeamMember member={member}/>)}
                </div>
            </Screen>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { team } = state;

    return {
        //team: team.team
    };
};

Team = connect(mapStateToProps)(Team);
export default Team;