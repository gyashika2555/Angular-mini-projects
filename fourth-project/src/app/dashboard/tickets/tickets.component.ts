import { Component } from '@angular/core';
import { NewTicketsComponent } from './new-ticket/new-ticket';
import { Ticket } from './ticket.model';
import { NewTicketComponent } from '../ticket/new-ticket/new-ticket';

@Component({
  selector: 'app-ticket',
  imports: [NewTicketsComponent ,NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
 tickets : Ticket[] =[];

 onAdd(ticketData:{title:string, text:string}){
  const ticket: Ticket = {
   title: ticketData.title,
   request : ticketData.text,
  id:Math.random().toString(),
  status:'open',
   }
   this.tickets.push(ticket);
 }
  
  onCloseTicket(id:string){
    this.tickets= this.tickets.map((ticket) => {
      if(ticket.id === id){
        return {...ticket, status:'closed' }
      }
        return ticket;
    });
  }

}
