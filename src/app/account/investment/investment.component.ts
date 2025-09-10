import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  projects = [
    {
      id: "",
      title: "",
      description: "",
      images: [
        {
          text: "",
          img: "",
          position:""
        }
      ],
      cover: ""
    }
  ]

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {

    this.projects = this.projectService.investments

  }

}
