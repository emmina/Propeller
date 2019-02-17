import React, { Component } from 'react';
import { connect } from 'react-redux';

import aboutImage from '../../assets/about_image.jpeg';
import Screen from '../../helpers/Screen';

import './style.css';

class About extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        //dispatch(aboutActions.getMovies());
    }

    render() {
        const { offices } = this.props;

        return (
            <Screen active='about'>
                <div className='row justify-content-around about'>
                    <img className='col-2' src={aboutImage} alt="about" height="150" width="200" />
                    <p className='col-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <img className='col-2' src={aboutImage} alt="about" height="150" width="200" />
                </div>
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