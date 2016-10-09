import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
    render() {
        const imageSrc = require('../../images/about_us.jpg');
        return (
            <div>
                <section className="col-md-12">
                    <h1>About Us</h1>
                </section>
                <section className="col-md-6">
                    <h3>Who Are We ?</h3>
                    <div className="element-padding">
                        At Val Home Service, we are focused on providing the best services with the highest 
                        levels of customer satisfaction – we will do everything we can to meet your <br/>expectations.
                        <br/><br/>With a variety of offerings to choose from, we’re sure you’ll be happy working with us. 
                        Look around our website and if you have any comments or questions.
                    </div>
                    <Link className="col-md-12" to="contact" className="btn btn-primary btn-md">Feel free to contact us</Link> 
                </section>
                <section className="col-md-6">
                    <h3>Why Us?</h3>
                    Choose a reliable service.
                    We will make sure that the work is done properly and efficiently.
                    We offer a variety of services and are fully insured for the work we carry out.
                    <br/>
                    <br/>
                    <img src={imageSrc} className="col-md-12 element-padding" />
                    <div className="col-md-12">Call on 07713 758164 for a free quote!</div>
                </section>
            </div>
        );
    }
}

export default AboutPage;