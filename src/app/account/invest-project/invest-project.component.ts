import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-invest-project',
  templateUrl: './invest-project.component.html',
  styleUrls: ['./invest-project.component.css']
})
export class InvestProjectComponent implements OnInit {

  project = {
    id: "",
    title: "",
    description: "",
    images: [
      {
        text: "",
        img: "",
        position: ""
      }
    ],
    cover: ""
  }

  projects = [
    {
      id: "",
      title: "",
      description: "",
      images: [
        {
          text: "",
          img: "",
          position: ""
        }
      ],
      cover: ""
    }
  ]

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.project = this.projectService.investments.filter((e) => e.id === this.route.snapshot.params["id"])[0]
    this.projects = this.projectService.investments.filter(e => e.id !== this.route.snapshot.params["id"])
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(location.href.split("/")[5] === "project-invest"){
          location.reload()
        }
      }
    })

  }

}
