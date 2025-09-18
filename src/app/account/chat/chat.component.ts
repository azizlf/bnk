import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  openMessages = false
  isThinking = false

  messages:any = []

  sendMsg(ms: any) {

    this.openMessages = true

    this.messages.push({
      msg: ms.value + "",
      sender: "user"
    })

    ms.value = ""

    this.isThinking = true

    setTimeout(() => {
      this.isThinking = false
      setTimeout(() => {
        this.messages.push({
          msg: `Bonjour ! 👋<br>
                Je suis ton assistant ImpactBank. 
                <br>Je peux t'aider à :<br>
                1️⃣ Gérer votre compte (solde, retraits, historique,parametre de compte)<br>
                2️⃣ Transfert ou Payer tes factures facilement<br>
                3️⃣ Soutenir et suivre des projets sociaux<br>
                Que veux-tu faire aujourd'hui ?<br>
                <strong>(Cette discussion est une démonstration d'un assistant AI.<br> La version réel n'est pas encore disponible)</strong>`,
          sender: "chat"
        })
      }, 200);
    }, 3000);

  }

}
