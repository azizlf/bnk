import { Component } from '@angular/core';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent {

  openFormFacture = false
  company = ""

  openLoading = false
  titleMessage = "Paiement Réussi"
  descMessage = "Votre paiement de facture a été effectué avec succès. Vous pouvez consulter le reçu dans l'historique de vos transactions."
  openMessage = false


  confirmPay() {
    this.openLoading = true
    setTimeout(() => {
      this.openLoading = false
      this.openMessage = true
    }, 3000);
  }

}
