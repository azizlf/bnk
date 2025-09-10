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
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iste, nam tempora rerum autem est. Quidem beatae laudantium tempore, fugiat, qui maxime ab ipsum optio aliquid vitae accusamus odio. Magni.",
          sender: "chat"
        })
      }, 200);
    }, 3000);

  }

}
