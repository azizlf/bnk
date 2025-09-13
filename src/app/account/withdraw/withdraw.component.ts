import { Component } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {

  bankChecked = ""

  openLoading = false
  titleMessage = "Retrait Réussi"
  descMessage = "Votre retrait est en cours de traitement. Le montant sera crédité dans un délai maximum de 8 jours si l'operation effectué avec succès."
  openMessage = false


  withdraw() {
    this.openLoading = true
    setTimeout(() => {
      this.openLoading = false
      this.openMessage = true
    }, 3000);
  }

}
