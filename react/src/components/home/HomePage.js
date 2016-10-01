import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return <div className="jumbotron">
            <h1>Vals Home Services</h1>
            <p>Some stuff goes here...</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more about us</Link>
        </div>
    }
}

export default HomePage;
