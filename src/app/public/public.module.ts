import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/home.component";

import { HomeService } from "./home/home.service";

@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent
    ],
    providers: [
        HomeService
    ]
})
export class PublicModule { }