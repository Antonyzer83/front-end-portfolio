import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvModule } from "./cv/cv.module";

import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from "./public.component";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

import { HomeService } from "./home/home.service";
import { AboutService } from "./about/about.service";

@NgModule({
    imports: [
        CommonModule,
        CvModule,
        PublicRoutingModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        AboutComponent
    ],
    exports: [
        PublicComponent
    ],
    providers: [
        HomeService,
        AboutService
    ]
})
export class PublicModule { }