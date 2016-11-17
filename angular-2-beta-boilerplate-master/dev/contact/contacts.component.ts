import {Component} from 'angular2/core'
import {ContactComponent} from './contact.component'
import {ContactService} from './contact.service'
import {Contact} from './contact'
import {OnInit} from 'angular2/core'

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
    providers: [ContactService],
    styleUrls: ['src/css/mycomponent.css']
})

export class ContactsComponent implements OnInit {
    
    public contacts: Contact[];
    public selectedContact = {};

    constructor(private _contactService: ContactService){
    }

    onSelect(contact) {
        this.selectedContact = contact;
    }

    getContacts() {
        this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
    }

    ngOnInit():any {
        this.getContacts();
    }
}