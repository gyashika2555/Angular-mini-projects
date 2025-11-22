import { Component, OnDestroy, OnInit,inject , DestroyRef, signal, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
 currentStatus =signal<'online' | 'offline'| 'unKnown'>('offline');
//  private interval? : ReturnType<typeof setInterval>;
 private destroyRef = inject(DestroyRef);

 constructor(){
  effect(() => {
 console.log(this.currentStatus());
  })
  // console.log(this.currentStatus());
  }
  
  ngOnInit() {
  console.log('ON INIT');
  const interval = setInterval(() => {
   
    const rnd=Math.random();
     
    if( rnd < 0.5){
      this.currentStatus.set('online');
    } else if ( rnd > 0.9 ) {
      this.currentStatus.set('offline');
    }  else {
      this.currentStatus.set('unKnown');
    }
    
  } , 5000);
  
  this.destroyRef.onDestroy(() =>{
  clearInterval(interval);
 });
}

  ngAfterViewInit(){
    console.log('After the init');
  }

  //  ngOnDestroy() {
  //   clearTimeout(this.interval);
  //  }
}


