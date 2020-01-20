import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from "./public.component";

@NgModule({
    imports: [
        CommonModule,
        //PublicRoutingModule
    ],
    declarations: [
        PublicComponent
    ],
    providers: [

    ]
})
export class PublicModule { }