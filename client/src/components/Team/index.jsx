import React, { Component } from 'react';
import { connect } from 'react-redux';

import Screen from '../../helpers/Screen';
import TeamMember from './TeamMember';
import { teamActions } from '../../actions';

import './style.css';

class Team extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(teamActions.getMembers());
    }

    render() {
        const { members } = this.props;

        return (
            <Screen active='team'>
                <div className='row team'>
                    {members.map(function (member, i) {
                        return <TeamMember key={i} member={member} />
                    })}
                </div>
            </Screen>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getMembers } = state;

    return {
        members: getMembers.members === undefined ? [] : getMembers.members.members
    };
};

Team = connect(mapStateToProps)(Team);
export default Team;