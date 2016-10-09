import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About Us</Link>
            {" | "}
            <Link to="/gallery" activeClassName="active">Gallery</Link>
            {" | "}
            <Link to="/reviews" activeClassName="active">Reviews</Link>
            {" | "}
            <Link to="/contact" activeClassName="active">Contact Us</Link>
        </nav>
    );
};

export default Header;