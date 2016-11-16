import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello world template</h1>
        <h2> Now comes my second comp</h2>
        <my-component></my-component>
    `, directives: [MyComponentComponent]
})
export class AppComponent {

}