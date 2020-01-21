import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { CertificationsService } from "./certifications.service";
import { Certifications } from "./certifications";

@Component({
    selector: 'certifications',
    templateUrl: './app/public/cv/certifications/certifications.component.html',
})
export class CertificationsComponent implements OnInit {

    certifications: Certifications[] = null;
    error: string = null;

    constructor(private certificationsService: CertificationsService) { }

    ngOnInit(): void {
        this.certificationsService.getCertifications().subscribe(
            (res: Certifications[]) => {
                this.certifications = res;
                console.log(this.certifications);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}