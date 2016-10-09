import React from 'react';
import Moment from 'moment';

class ContactPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: {
                action: '',
                name: '',
                message: ''
            }
        };

        this.nameDidChange = this.nameDidChange.bind(this);
        this.messageDidChange = this.messageDidChange.bind(this);
    }

    updateAction() {
        const NEW_LINE = '%0D%0A%0D%0A';
        const email = this.state.email;
        const name = `Name: ${email.name}`;
        const dateTime = `Date: ${Moment(new Date()).format('ddd MMM YYYY HH:MM')}`;
        email.action = `mailto:john_kidd@outlook.com?subject=Quotation&body=${name}${NEW_LINE}${dateTime}${NEW_LINE}${email.message}`; 
        this.setState({email: email});     
    }

    nameDidChange(event) {
        const email = this.state.email;
        email.name = event.target.value;
        this.setState({email: email});
        this.updateAction();     
    }

    messageDidChange(event) {
        const email = this.state.email;
        email.message = event.target.value;
        this.setState({email: email});
        this.updateAction();     
    }

    render() {
        return (
            <div>
                <h1 className="col-md-12">Contact Us</h1>
                <section className="col-md-8">
                    <h4>Please get in touch for a free quote!</h4>
                    <div>Interested in our services?  Get in touch with us via the form below and we'll get back to you as soon as possible.</div>
                    <br/>
                    <form 
                        className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="name" 
                                className="form-control" 
                                id="name"
                                onChange={this.nameDidChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Message:</label>
                            <textarea 
                                type="body" 
                                className="form-control" 
                                id="body" 
                                rows="10"
                                cols="10"
                                onChange={this.messageDidChange} 
                                defaultValue={this.state.email.body}>
                            </textarea>
                        </div>
                        <br/>
                        <a 
                            href={this.state.email.action} 
                            className="btn btn-primary btn-md">
                            Request a Quote
                        </a>
                    </form>
                </section>
                <section className="col-md-4">
                    <h4 className="info-section">Contact Information</h4>
                    <div className="info-section">
                        <br/><strong>Val Home Services</strong> 
                        <br/>Phone: 07751 159465
                        <br/>Email: valhomeservice@gmail.com
                        
                        <br/><br/><strong>Opening Hours</strong>
                        <br/>Mon-Fri: 9-5pm
                        <br/>Sat: 10-4pm
                        <br/>Sun: Closed
                        
                        <br/><br/><strong>Out of Hours</strong>
                        <br/>Phone: 07713 758164

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