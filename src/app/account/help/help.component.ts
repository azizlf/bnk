import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  question = ""

  questions = [
    {
      question:"Comment effectuer un transfert ?",
      answer:"Entrez le montant et le bénéficiaire, puis confirmez la transaction. Toutes les opérations sont cryptées et sûres."
    },
    {
      question:"Comment contribuer à un projet social",
      answer:"Choisissez un projet dans la section dédiée, indiquez le montant que vous souhaitez contribuer et suivez l'impact généré."
    },
    {
      question:"Que faire en cas de probléme de paiement ?",
      answer:"Contactez notre support via l’application ou par email à support@impactbank.com. Notre équipe vous aidera rapidement."
    }
  ]

}
