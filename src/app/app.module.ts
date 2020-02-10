import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent }  from './app.component';

import { PublicModule } from "./public/public.module";
import { BlogModule } from "./blog/blog.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        PublicModule,
        BlogModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }