import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
// import { NewMessageComponent } from './messages/new-message/new-message';
import { Messages } from "./messages/messages";
// import { Messages } from "./messages/messages";

@Component({
  selector: 'app',
  standalone: true,
  imports: [CounterComponent, Messages],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  get debugOutput(){
    console.log(`[AppComponent] "debugOutput" binding re-evaluated.`);
    return `AppComponent Component Debug Output`;
  }

}
