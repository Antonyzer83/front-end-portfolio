import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

import { CompaniesService } from "./companies.service";
import { Companies } from "./companies";

@Component({
    selector: 'companies-list',
    templateUrl: './app/blog/companies/companies-list.component.html',
    styleUrls: ['./app/blog/companies/companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

    companies: Companies[] = null;
    error: string = null;

    constructor(private companiesService: CompaniesService) { }

    ngOnInit(): void {
        this.companiesService.getCompanies().subscribe(
            (res: Companies[]) => {
                this.companies = res;
                console.log(this.companies);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}