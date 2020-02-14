import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CompaniesService } from "./companies.service";
import { Companies } from "./companies";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'companies-detail',
    templateUrl: './app/blog/companies/companies-detail.component.html',
    styleUrls: ['./app/blog/companies/companies-detail.component.css']
})
export class CompaniesDetailComponent implements OnInit {

    company: Companies = null;
    error: string = null;

    constructor(private route: ActivatedRoute, private companiesService: CompaniesService, private titleService: Title) { }

    ngOnInit(): void {
        this.titleService.setTitle("CASTANER Antony | Blog");
        let id = +this.route.snapshot.paramMap.get('id');
        this.companiesService.getCompany(id).subscribe(
            (res: Companies) => {
                this.company = res;
                console.log(this.company);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}