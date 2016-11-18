import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Router} from 'angular2/router'
import {RouteParams} from 'angular2/router'
import {OnInit} from 'angular2/core'
import {Contact} from './contact'
import {ControlGroup} from 'angular2/common'
import {FormBuilder} from  'angular2/common'
import {Validators} from 'angular2/common'

@Component({
    template: `
    <form [ngFormModel]="contactForm"(ngSubmit)="onSubmit()">
        <div>
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name"
            [ngFormControl]="contactForm.controls['firstName']"
            >
        </div>
        <div>
            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" 
            [ngFormControl]="contactForm.controls['lastName']"
            >
        </div>
        <div>
            <label for="phone">Phone:</label>
            <input type="text" id="phone"
            [ngFormControl]="contactForm.controls['phone']"
            >
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" id="email"
            [ngFormControl]="contactForm.controls['email']"
            >
        </div>
        <button type="submit" [disabled]="!contactForm.valid">Create contact</button>
    </form>
    `,
    providers: [ContactService],
    styles: [`
        label {
            display: inline-block;
            width: 140px;
        }

        input {
            width: 250px;     
        }

        .ng-invalid {
            border: 1px solid red;
        }
    `]
})

export class NewContactComponent implements OnInit{

    contactForm: ControlGroup;

    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams, private _formBuilder: FormBuilder) {}

    onSubmit(){
        this._contactService.insertContact(this.contactForm.value);
        this._router.navigate(['Contacts']);
    }

    ngOnInit():any{
        this.contactForm = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName: [this._routeParams.get('lastName'), Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required]
        });
    }
}