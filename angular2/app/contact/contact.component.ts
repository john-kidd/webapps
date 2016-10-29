import { Component, OnInit, Input } from '@angular/core';

import moment = require('moment')

@Component({
    templateUrl: 'app/contact/contact.component.html'
})
export class ContactComponent { 
    pageTitle: string = "Contact us";
    name: string;
    message: string;
    email: string;

    propertyDidChange() {
        const NEW_LINE = '%0D%0A%0D%0A';        
        const name = `Name: ${this.name}`;
        const dateTime = `Date: ${moment(new Date()).format('ddd MMM YYYY HH:MM')}`;
        this.email=`mailto:john_kidd@outlook.com?subject=Quotation&body=${this.name}${NEW_LINE}${dateTime}${NEW_LINE}${this.message}`; 
    }
}