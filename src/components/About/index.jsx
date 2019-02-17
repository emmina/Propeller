import React, { Component } from 'react';
import { connect } from 'react-redux';

import Screen from '../../helpers/Screen';

class About extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        //dispatch(aboutActions.getMovies());
    }

    render() {
        const { offices } = this.props;

        return (
            <Screen active='about'>
                Test
            </Screen>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { map } = state;

    return {
        //offices: map.offices
    };
};

About = connect(mapStateToProps)(About);
export default About;