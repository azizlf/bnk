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

  projects: any = []

  titleMessage = "Paiement Réussi"
  descMessage = "Votre paiement a été effectué avec succès. Merci pour votre confiance."
  openMessage = false

  earns = 0
  
  calculate(bdg:any){

    this.earns = bdg + (bdg*0.03)

  }

  confirmPay() {
    this.openLoading = true
    setTimeout(() => {
      this.openLoading = false
      this.openMessage = true
    }, 3000);
  }

  constructor(private projectService: ProjectService) { }

  getProjects() {

    if (this.category === "invest") {

      this.projects = this.projectService.investments

    } else {

      let projs:any = []

      this.projectService.projects.forEach((e)=>{

        projs.push(...e.prj)

      })
      
      this.projects = projs

    }

  }

  ngOnInit(): void { }

}
