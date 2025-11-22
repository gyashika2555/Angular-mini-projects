import { Component, input, signal,output } from '@angular/core';
import { Ticket } from '../../tickets/ticket.model';

@Component({
  selector: 'app-new-ticket',
  imports: [],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'
})
export class NewTicketComponent {
 data = input.required<Ticket>({});
 close = output();
 detailsVisible =signal(false);

 onToggleDetails (){
  // this.detailsVisible.set(!this.detailsVisible());
   this.detailsVisible.update((wasVisible) => !wasVisible );
 }
 
 onMarkAsCompleted(){
  this.close.emit();
 }

}
