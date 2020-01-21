"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const contact_service_1 = require("./contact.service");
let ContactComponent = class ContactComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.contact = null;
        this.error = null;
    }
    ngOnInit() {
        this.contactService.getContact().subscribe((res) => {
            this.contact = res;
            console.log(this.contact);
        }, (err) => {
            this.error = err;
        });
    }
};
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact',
        templateUrl: './app/public/contact/contact.component.html',
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map