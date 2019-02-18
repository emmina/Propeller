import React, { Component } from 'react';
import { connect } from 'react-redux';

import aboutImage from '../../assets/about_image.jpeg';
import { Screen, Map } from '../../helpers';
import offices from '../../data/offices';
import { aboutActions } from '../../actions';

import './style.css';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            offices: offices,
            showOffice: 0,
        }

        console.log('CONSTRUCT')

        this.onClickOffice = this.onClickOffice.bind(this);
    }
    
    componentWillMount() {
        const { dispatch } = this.props;
        console.log('WILL')

        dispatch(aboutActions.getOffices());
    }

    onClickOffice(officeNmbr) {
        switch(officeNmbr) {
            case 1: this.setState({showOffice: 1});
            break;
            case 2: this.setState({showOffice: 2});
            break;
            default: break;
        }
    }

    render() {
        //const { offices } = this.props;
        const { offices, showOffice } = this.state;
        console.log('RENDER')

        return (
            <Screen active='about'>
                <div className='row justify-content-around about'>
                    <img className='col-2' src={aboutImage} alt="about" height="150" width="200" />
                    <p className='col-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <div>
                        <div className='office-buttons'>
                            <button onClick={(e) => this.onClickOffice(1)}>Office 1</button>
                            <button onClick={(e) => this.onClickOffice(2)}>Office 2</button>
                        </div>
                        <Map offices={offices} showOffice={showOffice} onMarkerClick={this.onMarkerClick} />
                    </div>
                </div>
            </Screen>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { offices } = state;
    console.log(state, ownProps)

    return {
        offices: offices === undefined ? [] : offices.offices
    };
};

About = connect(mapStateToProps)(About);
export default About;