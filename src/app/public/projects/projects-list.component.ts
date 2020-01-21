import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ProjectsService } from "./projects.service";
import { Projects } from "./projects";

@Component({
    selector: 'projects-list',
    templateUrl: './app/public/projects/projects-list.component.html',
})
export class ProjectsListComponent implements OnInit{

    projects: Projects[] = null;
    error: string = null;

    constructor(private projectsService: ProjectsService) { }

    ngOnInit(): void {
        this.projectsService.getProjects().subscribe(
            (res: Projects[]) => {
                this.projects = res;
                console.log(this.projects);
            },
            (err) => {
                this.error = err;
            }
        );
    }
}