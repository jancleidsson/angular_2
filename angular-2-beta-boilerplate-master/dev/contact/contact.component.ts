import {Component} from 'angular2/core'

@Component({
    selector: 'contact-component',
    template: `
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
    public contact = {}
}