import {Component} from 'angular2/core'
import {HTTPTestService} from './http-test.service'

@Component({
    selector: 'http-test',
    template: `
        <button (click)="onTestGET()">Test GET request</button><br>
        <p>Output: {{getData}}</p>
        <button (click)="onTestPOST()">Test POST request</button><br>
        <p>Post data: {{postData}}</p>
    `,
    providers: [HTTPTestService]
})

export class HTTPTestComponent {
    getData: string;
    postData: string;

    constructor(private _httpTestService: HTTPTestService){}

    onTestGET(){
        this._httpTestService.getCurrentTime().subscribe(
            data => this.getData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Request finished")
        );
    }

    onTestPOST(){
        this._httpTestService.postJSON().subscribe(
           data => this.postData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Request finished")
        );
    }
}