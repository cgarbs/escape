import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

// Must include social media content/links

    render() {
        return (
            <div className="navbar">
                <Link to="/">HOME</Link>
                <Link to="/reservations">BOOK</Link>
                <Link to="/corporate">CORPORATE BOOKINGS</Link>
                <Link to="/faq">F.A.Q.</Link>
                <Link to ="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        );
    }
}

export default Navbar;