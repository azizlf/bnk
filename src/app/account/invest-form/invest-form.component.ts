import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-invest-form',
  templateUrl: './invest-form.component.html',
  styleUrls: ['./invest-form.component.css']
})
export class InvestFormComponent implements OnInit {

  category = ""
  stepForm = "flexs"
  projectSelected = ""
  cardSelected = ""
  budgets = [
    500,
    1000,
    1500,
    3000,
    5000,
    10000,
    35300,
    45300,
    55300,
    65300,
    75300,
  ]
  budgetSelected = 0
  openLoading = false

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

  titleMessage = "Paiement Réussi"
  descMessage = "Votre paiement a été effectué avec succès. Merci pour votre confiance."
  openMessage = false

  confirmPay() {
    this.openLoading = true
    setTimeout(() => {
      this.openLoading = false
      this.openMessage = true
    }, 3000);
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {

    this.projects = this.projectService.investments

  }

}
