import {Component} from 'angular2/core'

@Component({
    selector: 'contact-component',
    template: `
    <input type="text" [(ngModel)]="contact.firstName">
    <div>
        phone: {{contact.phone}} <br>
        email: {{contact.email}}
    </div>
    `,
    inputs: ["contact"]
})

export class ContactComponent {
    public contact = {}
}