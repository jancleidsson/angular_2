import {Component} from 'angular2/core';
import {jQueryComponent} from './jquery.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>jQuery on Angular2</h1>
        <my-jquery></my-jquery>
    `,
    directives: [jQueryComponent]
})
export class AppComponent {
}