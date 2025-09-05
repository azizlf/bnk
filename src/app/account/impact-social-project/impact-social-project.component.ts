import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-impact-social-project',
  templateUrl: './impact-social-project.component.html',
  styleUrls: ['./impact-social-project.component.css']
})
export class ImpactSocialProjectComponent implements OnInit {

  project = {
    id: "",
    img: "",
    title: "",
    description: "",
    details: [
      {
        nbr: 0,
        title: ""
      }
    ],
    prj: [
      {
        img: "",
        title: ""
      }
    ],
    comments: [
      {
        img: "",
        text: ""
      }
    ]
  }

  constructor(private projetService: ProjectService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.project = this.projetService.projects.filter(e => e.id === this.router.snapshot.params["id"])[0]

  }

}
