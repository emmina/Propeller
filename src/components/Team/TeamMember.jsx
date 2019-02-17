import React, { PureComponent } from 'react';

import person from '../../assets/ManIcon.png';

class TeamMember extends PureComponent {
    render() {
        const { member } = this.props;

        return (
            <div className='row team'>
                <img className='col-1 person' src={person} alt="about" height="130" width="80" />
                <p className='col-5'>{member.info}</p>
            </div>
        )
    }
}

export default TeamMember;