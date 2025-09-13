import { Component } from '@angular/core';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.css']
})
export class TransfertComponent {

  titleMessage = "Transferé avec sucées"
  descMessage = "Votre opération a été réalisée avec succès. Vous pouvez consulter les détails du transfert dans l’historique de vos transactions."
  openMessage = false
  openLoading = false

  sendMoney() {
    this.openLoading = true
    setTimeout(() => {
      this.openLoading = false
      this.openMessage = true
    }, 3000);
  }

}
