import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const publicRoutes: Routes = [
    { }
];

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule {}