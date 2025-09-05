import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {

  cardImage = "card"

  detectCardType(e:any): void {

    const cardNumber = e.target.value

    const number = cardNumber.replace(/\s+/g, '')

    if (/^4[0-9]{0,}$/.test(number)) {
      this.cardImage = 'visa';
    } else if (/^5[1-5][0-9]{0,}$/.test(number) || /^2(2[2-9][1-9]|[3-6][0-9]{2}|7[01][0-9]|720)[0-9]*$/.test(number)) {
      this.cardImage = 'master'
    } else {
      this.cardImage = 'card'
    }
  }

}
