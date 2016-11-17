import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';

@Component({
    selector: 'contact-component',
    template: `
    <div>
        <div>
            <label for="first-name">First Name:</label>
            <input type="text" [(ngModel)]="contact.firstName">
        </div>
        <div>
            <label for="last-name">Last Name:</label>
            <input type="text" [(ngModel)]="contact.lastName">
        </div>
        <div>
            <label for="phone">Phone:</label>
            <input type="text" [(ngModel)]="contact.phone">
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" [(ngModel)]="contact.email">
        </div>
        <button (click)="onCreatetFromContact()">Create a contact from this contact</button>
    </div>
    `,
    inputs: ["contact"],
    styles: [`
        label {
            display: inline-block;
            width: 140px;
        }

        input {
            width: 250px;     
        }
    `]
})

export class ContactComponent {
    public contact: Contact = {firstName: "", lastName: "", email: "", phone: ""};

    constructor(private _router: Router) {}

    onCreatetFromContact() {
        // this._router.navigate(['NewContact', {lastName: this.contact.lastName}])
        this._router.navigate(['NewContactFromContact', {lastName: this.contact.lastName}])
    }
}