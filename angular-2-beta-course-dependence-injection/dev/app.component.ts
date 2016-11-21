import {Component} from 'angular2/core';
import { Component1Component } from './component1.component';
import { Component2Component } from './component2.component';

@Component({
    selector: 'my-app',
    template: `
        <selector>
            <component1></component1>
        </selector>
        <selector>
            <component2></component2>
        </selector>
    `,
    directives: [Component1Component, Component2Component]
})
export class AppComponent {
    childValue: string;
}