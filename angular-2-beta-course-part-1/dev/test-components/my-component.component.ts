import {Component} from 'angular2/core';
import {TestComponent} from './test.component';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: ` 
    This is my first component with name <span [style.color]="inputFieldLocalVariable.value === 'yes'? 'red' : ''">{{name}}</span>!
    <br>
    <br>
    <span [class.red-style]="inputFieldLocalVariable.value === 'yes'">It's awesome?</span>
    <input type="text" #inputFieldLocalVariable (keyup)="0">
    <br>
    <br>
    <button [disabled]="inputFieldLocalVariable.value !== 'yes'">Only enbaled if 'yes' was typed</button>
    <test></test>
    `,
    styleUrls: ['src/css/mycomponent.css'],
    directives: [TestComponent]
})

export class MyComponentComponent implements OnInit {
    name: string;

    // constructor(){
    //     this.name = 'Max'
    // }

    ngOnInit():any {
        this.name = 'Max'
    }
} 