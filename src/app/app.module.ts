import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent }  from './app.component';

import { PublicModule } from "./public/public.module";

@NgModule({
    imports: [
        BrowserModule,
        PublicModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }