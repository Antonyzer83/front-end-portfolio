import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from "./projects.service";
import { Projects } from "./projects";

@Component({
    selector: 'projects-detail',
    templateUrl: './app/public/projects/projects-detail.component.html',
    styleUrls: ['./app/public/projects/projects-detail.component.css']
})
export class ProjectsDetailComponent implements OnInit {

    project: Projects = null;
    error: string = null;

    constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsService
    ) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.projectsService.getProject(id).subscribe(
            (res: Projects) => {
                this.project = res;
                console.log(this.project);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}