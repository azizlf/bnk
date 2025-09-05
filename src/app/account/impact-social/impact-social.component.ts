import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-impact-social',
  templateUrl: './impact-social.component.html',
  styleUrls: ['./impact-social.component.css']
})
export class ImpactSocialComponent implements OnInit {

  projects:any = []

  constructor(private projectService:ProjectService){}

  ngOnInit(): void {

    this.projects = this.projectService.projects
    
  }

}
