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
      answer:""
    },
    {
      question:"Les transferts sont-ils sécurisés ?",
      answer:""
    },
    {
      question:"Comment contribuer à un projet social",
      answer:""
    },
    {
      question:"Que faire en cas de probléme de paiement ?",
      answer:""
    }
  ]

}
