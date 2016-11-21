import {Injectable} from 'angular2/core';

@Injectable()
export class RandomDataService {

   private _data = ['Data 1', 'Data 2', 'Data 3'];

    getRadomData(){
        return this._data[Math.floor(Math.random() * this._data.length)];
    }

    insertData(data: string){
        this._data.push(data);    
    }
}