import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { HomeService } from "./home.service";
import { Home } from "./home";

@Component({
    selector: 'home',
    templateUrl: './app/public/home/home.component.html'
})
export class HomeComponent implements OnInit {

    home: Home = null;
    error: string = null;

    constructor(private homeService: HomeService) {
    }

    ngOnInit(): void {
        this.homeService.getHome().subscribe(
            (res: Home[]) => {
                this.home = res;
                console.log(this.home);
            },
            (err) => {
                this.error = err;
            }
        );
        /*
        this.homeService.getHome()
            .subscribe(home => this.home = home);
        console.log('Home ' + this.home[0].name);
         */
    }
}