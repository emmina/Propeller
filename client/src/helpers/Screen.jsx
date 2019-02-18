import React, { Component } from 'react';

import { Navbar, Header, Footer } from './index';

class Screen extends Component {

    render() {
        const { active, children } = this.props;

        return (
            <div>
                <Header />
                <Navbar active={active} />
                {children}
                <Footer />
            </div>
        )
    }
}

export default Screen;