import {Component} from 'angular2/core';
import {MyComponentComponent} from './test-components/my-component.component';
import {MyInformationComponent} from './test-components/my-information.component';
import {ContactsComponent} from './contact/contacts.component';
import {NewContactComponent} from './contact/new-contact.component';
import {HTTPTestComponent} from './test-components/http-test.component'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {RouteConfig} from 'angular2/router'

@Component({
    selector: 'my-app',
    template: 
    `   <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contact</a>
            </nav>
        </header>
        <div class = "main">
            <router-outlet></router-outlet>
            <http-test></http-test>
        </div>
    `, directives: [ContactsComponent, HTTPTestComponent,  ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/contacts',
        name: 'Contacts',
        component: ContactsComponent,
        useAsDefault: true
    },
    {
        path: '/newcontact',
        name: 'NewContact',
        component: NewContactComponent
    },
    {
        path: '/newcontact/:lastName',
        name: 'NewContactFromContact',
        component: NewContactComponent
    }
])
export class AppComponent {

}