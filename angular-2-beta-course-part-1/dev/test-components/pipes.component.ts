import {Component} from 'angular2/core'

@Component({
    selector: 'pipes',
    template: `
        <div class="pipes">
            <h2>Dates</h2>
            <div>
                {{date | date}}
            </div>
            <div>
                {{date | date:'short'}}
            </div>
            <div>
                {{date | date:'fullDate'}}
            </div>
            <h2>Number Pipe</h2>
            <div>
                {{ 4.5677789089 | number:'1.1-3'}}
            <div>
            <h2>Currency Pipe</h2>
            <div>
                {{ 4.99 | currency:'USD':true:'1.4-4' }}
            <div>
            <h2>Stateful Pipe</h2>
            <div>
                {{ asyncData | async }}
            <div>
        <div>
    `
})
export class PipesComponent {
    date = new Date();
    asyncData = new Promise((resolve => {
        setTimeout(() => resolve('Async data!'), 10000);
    }));
}