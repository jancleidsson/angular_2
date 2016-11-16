import {Component} from 'angular2/core';

@Component({
    selector: 'my-information',
    template: `
    <h3
    (click)="onSelect()"
    [class.red-style]="showDetail === true"
    >{{contactInfo.firstName}} {{contactInfo.lastName}}</h3>
    <input type="text" [(ngModel)]="contactInfo.firstName">
    <div *ngIf="showDetail === true">
        phone: {{contactInfo.phone}} <br>
        email: {{contactInfo.email}}
    </div>
    `,
    styleUrls: ['src/css/mycomponent.css']
})

export class MyInformationComponent {
    public contactInfo = {
        firstName: 'Jancleidsson',
        lastName: 'Soares',
        phone: '81-9999-9999',
        email: 'jancleidsson@gmail.com'
    };
    public showDetail = false;

    onSelect(){
        this.showDetail = !this.showDetail;
    }
}