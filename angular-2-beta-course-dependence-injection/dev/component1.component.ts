import { Component } from 'angular2/core';
import { RandomDataService } from './random-data.service';

@Component({
    selector: 'component1',
    template: `
    <h1>Component 1</h1>
    <div>
        <button (click)="onGetData()">Get random data</button>
        <h3>Random data: {{data}} </h3>
        <input type="text" #input>
        <button (click)="onAddItem(input.value)">Add</button>
    </div>                
    `,
    providers: [RandomDataService]
})

export class Component1Component {
   data: string;

   constructor(private _randomDataService: RandomDataService){}

   onGetData(){
       this.data = this._randomDataService.getRadomData();
   }

   onAddItem(data: string){
       this._randomDataService.insertData(data);
   }
}