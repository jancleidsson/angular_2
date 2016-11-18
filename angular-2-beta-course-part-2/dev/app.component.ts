import {Component} from 'angular2/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="parent">
            <h1>Parent</h1>
            <p>Value entered in child: {{childValue}}</p>
            <input type="text" #parentInput (keyup)="0"><br>
            <div class= "child-component">
                <child [parentValue]="parentInput.value" (childChanged)="childValue = $event"></child>
            </div>
        </div>
    `,
    directives: [ChildComponent],
    styles: [`
        .parent {
            margin: 12px 0;
            background-color: #eee;
        }

        .child-component {
            padding-left: 12px;
            background-color: #aaa;
        }
    `]
})
export class AppComponent {
    childValue: string;
}