import {Component} from 'angular2/core'
import {ContactComponent} from './contact.component'

@Component({
    selector: 'contacts-component',
    template: `
    <ul>
        <li *ngFor="#contact of contacts"
        (click)="onSelect(contact)"
        [class.red-style]="selectedContact === contact">
        {{contact.firstName}}
        </li>
    </ul>
    <contact-component [contact]="selectedContact"><contact-component>
    `,
    directives: [ContactComponent],
    styleUrls: ['src/css/mycomponent.css']
})

export class ContactsComponent {
    public contacts = [
        {
            firstName: 'Jancleidsson',
            lastName: 'Soares',
            phone: '81-9999-9999',
            email: 'jancleidsson@gmail.com'
        },
        {
            firstName: 'Carlos',
            lastName: 'José',
            phone: '81-9999-8888',
            email: 'carlos@gmail.com'
        },
        {
            firstName: 'Ismael',
            lastName: 'silva',
            phone: '81-9999-7777',
            email: 'ismael@gmail.com'
        }
    ]

    public selectedContact = {};

    onSelect(contact){
        this.selectedContact = contact;
    }
}