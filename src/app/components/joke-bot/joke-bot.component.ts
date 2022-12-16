import { Component } from '@angular/core';

@Component({
  selector: 'app-joke-bot',
  templateUrl: './joke-bot.component.html',
  styleUrls: ['./joke-bot.component.scss']
})
export class JokeBotComponent {

  private socketUrl = 'ws://sleepy-reef-66846.herokuapp.com'
  chatResponses: Element | null;
  newText: string = '';
  messages: Msg[] = []

  constructor() {
    const ws = new WebSocket(this.socketUrl);
    this.chatResponses = document.querySelector('#chat-responses')

    ws.onopen = () => {
      document.querySelector('#new-chat-form')?.addEventListener('submit', (e) => {
        e.preventDefault()
        ws.send(this.newText);
      });
    };

    ws.onmessage = (msg) => {
      const data: Msg = JSON.parse(msg.data)
      this.messages.push(data)
    };
  }

}

interface Msg {
  name: string
  data: string
}
