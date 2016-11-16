import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';
import {MyInformationComponent} from './my-information.component';
import {ContactsComponent} from './contacts.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My app</h1>
        <!-- <my-component></my-component> -->
        <!-- <my-information></my-information> -->
        <contacts-component></contacts-component>
    `, directives: [ContactsComponent]
})
export class AppComponent {

}