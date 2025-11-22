import {Component} from '@angular/core';
import { HeaderComponent } from "./header.component/header.component";
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { dashboardItemComponent } from './dashboard/dashboard.item/dashboard-item.component';

@Component({
    selector:'app-root',
    standalone:true,
    templateUrl:'./app.Component.html',
    imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    dashboardItemComponent      
],
    styleUrl: './app.component.css'
})

export class AppComponent{
   
}