import {Component, Input} from '@angular/core';
import { OnInit } from '@angular/core';

import { ContactService } from "./contact.service";
import { Contact } from "./contact";
import { Message } from "./message";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'contact',
    templateUrl: './app/public/contact/contact.component.html',
})
export class ContactComponent implements OnInit{

    contact: Contact = null;
    message: Message = null;
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

    onSubmit(contactForm: NgForm): void {
        this.message = contactForm.value;
        console.log(this.message);
    }
}