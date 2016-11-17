import {Injectable} from 'angular2/core';
import {CONTACTS} from './contacts-mock';

@Injectable()
export class ContactService {
    getContacts(){
        return Promise.resolve(CONTACTS);
    }
}