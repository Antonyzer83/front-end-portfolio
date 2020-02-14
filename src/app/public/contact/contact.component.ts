import {Component, Input} from '@angular/core';
import { OnInit } from '@angular/core';

import { ContactService } from "./contact.service";
import { Contact } from "./contact";
import { Message } from "./message";
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'contact',
    templateUrl: './app/public/contact/contact.component.html',
    styleUrls: [ './app/public/contact/contact.component.css' ]
})
export class ContactComponent implements OnInit{

    contact: Contact = null;
    message: Message = null;
    error: string = null;

    constructor(private contactService: ContactService, private titleService: Title) { }

    ngOnInit(): void {
        this.titleService.setTitle("CASTANER Antony | Contact");
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