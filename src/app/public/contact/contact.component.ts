import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ContactService } from "./contact.service";
import { Contact } from "./contact";

@Component({
    selector: 'contact',
    templateUrl: './app/public/contact/contact.component.html',
})
export class ContactComponent implements OnInit{

    contact: Contact = null;
    error: string = null;

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
        this.contactService.getContact().subscribe(
            (res: Contact) => {
                this.contact = res;
                console.log(this.contact);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}