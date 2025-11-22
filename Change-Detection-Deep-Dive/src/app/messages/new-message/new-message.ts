import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../messages.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.html',
  styleUrl: './new-message.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class NewMessageComponent {
  // add = output<string>();
  private messageService=inject(MessagesService);
   enteredText ='';

  // enteredText = signal('');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    // this.add.emit(this.enteredText());
    this.messageService.addMessage(this.enteredText);
    this.enteredText = '';
  }
}
