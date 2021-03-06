import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        const top = require('../../images/home_top_right.jpg');
        const bottom = require('../../images/home_bottom_left.jpg');

        return (
            <div>
                <h2>Val Home Services</h2>
                <p>We offer a variety of services and are fully insured for the work we carry out.</p>
                <br/>
                <div className="row">
                    <div className="col-md-7">
                        <h4>Our internal and external services:</h4>
                        <ul>
                            <li>Painting fascia and soffits</li>
                            <li>Internal painting</li>
                            <li>External painting</li>
                            <li>Plastering</li>
                            <li>Plaster boards</li>
                            <li>Decorating</li>
                            <li>Patio cleaning</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <img src={top} className="thumbnail picture" />
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-7">
                        <h4>Our gutter services:</h4>
                        <li>Clean and repair your gutters</li>
                        <li>Clean your fascia and soffits</li>
                        <li>Install new fascia and soffits</li>
                        <li>Install gutter guards</li>
                        <li>All types of roof cleaning (conservatory, house, garage, flat roofs...)</li>
                    </div>
                    <div className="col-md-5">
                        <img src={bottom}  className="thumbnail picture" />
                    </div>
                </div>
                <br/>
                    
            </div>
        );
    }
}

export default HomePage;