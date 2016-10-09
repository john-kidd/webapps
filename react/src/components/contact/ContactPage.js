import React from 'react';

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <h1 className="col-md-12">Contact Us</h1>
                <section className="col-md-8">
                    <h4>Please get in touch for a free quote!</h4>
                    <div>Interested in our services?  Get in touch with us via the form below and we'll get back to you as soon as possible.</div>
                    <br/>
                    <form className="col-md-12" action="mailto:john_kidd@outlook.com" method="post" enctype="text/plain">
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="name" className="form-control" id="name"></input>
                        </div>
                        <div className="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" className="form-control" id="email"></input>
                        </div>
                        <div class="form-group">
                            <label for="body">Message:</label>
                            <textarea type="body" className="form-control" id="body" rows="10"></textarea>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary btn-md">Request Quote</button>
                    </form>
                </section>
                <section className="col-md-4">
                    <h4 className="info-section">Contact Information</h4>
                    <div className="info-section">
                        <br/><strong>Val Home Services</strong> 
                        <br/>Phone: 07713 758164
                        <br/>Email: kvlatko161@gmail.com
                        
                        <br/><br/><strong>Opening Hours</strong>
                        <br/>Mon-Fri: 9-5pm
                        <br/>Sat: 10-4pm
                        <br/>Sun: Closed

                        <br/><br/><strong>Address</strong>
                        <br/>St. Albans,
                        <br/>Hertfordshire
                    </div>
                </section>
            </div>
        );
    }
}

export default ContactPage;