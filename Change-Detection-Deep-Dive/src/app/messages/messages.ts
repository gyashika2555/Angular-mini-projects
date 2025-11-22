import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessagesList } from './messages-list/messages-list';
import { NewMessageComponent } from './new-message/new-message';
// import { NewMessage } from "./new-message/new-message";
// import { MessagesList } from "./messages-list/messages-list";

@Component({
  selector: 'app-messages',
  standalone:true,
  imports: [MessagesList,NewMessageComponent],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Messages {
  // message = signal<string[]>([]);

  get debugOutput() {
    console.log(`[Messages] "debugOutput" binding re-evaluated.`);
    return `Messages Component Debug Output`;
  }

  // onAddMessage(message:string){
  //   this.message.update((oldMessages) =>[ ...oldMessages, message ] );
  // }
}
