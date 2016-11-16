import {Component} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: ` 
    This is my component with name {{name}}!
    <br>
    <br>
    <span [class.is-awesome]="inputFieldLocalVariable.value === 'yes'">It's awesome!</span>
    <input type="text" #inputFieldLocalVariable (keyup)="0">
    `,
    styleUrls: ['src/css/mycomponent.css'] 
})

export class MyComponentComponent {
    name = 'My component'
} 