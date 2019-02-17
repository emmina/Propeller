import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Navbar extends Component {
    render() {
        const { active } = this.props;

        return (
            <nav className="nav-border nav navbar navbar-expand-lg navbar-light">
                <Link className={`nav-link ${active === 'about' ? 'navlink-active' : ''}`} to='/about'>About</Link>
                <Link className={`nav-link ${active === 'team' ? 'navlink-active' : ''}`} to='/team'>Team</Link>
                <Link className={`nav-link ${active === 'projects' ? 'navlink-active' : ''}`} to='/projects'>Projects</Link>
            </nav>
        );
    }
}

export default Navbar;
