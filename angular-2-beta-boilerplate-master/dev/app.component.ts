import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';
import {MyInformationComponent} from './my-information.component';
import {ContactsComponent} from './contact/contacts.component';
import {NewContactComponent} from './contact/new-contact.component';
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {RouteConfig} from 'angular2/router'

@Component({
    selector: 'my-app',
    template: `
        <!-- <my-component></my-component> -->
        <!-- <my-information></my-information> -->
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contact</a>
            </nav>
        </header>
        <div class = "main">
            <router-outlet></router-outlet>
        </div>
    `, directives: [ContactsComponent, NewContactComponent, ROUTER_DIRECTIVES]
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
    }
])
export class AppComponent {

}