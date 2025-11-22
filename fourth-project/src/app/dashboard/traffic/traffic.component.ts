import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic',
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  dummyTrafficData =[
    {
        id:'d1',
        value:433,
    },
    {
        id:'d2',
        value:423,
    },
    {
        id:'d3',
        value:233,
    },
    {
        id:'d4',
        value:763,
    },
    {
        id:'d5',
        value:493,
    },
    {
        id:'d6',
        value:700,
    } ,

    ];
    maxTraffic =Math.max(...this.dummyTrafficData.map((data) =>data.value));
    // currentStatus='online';
}
