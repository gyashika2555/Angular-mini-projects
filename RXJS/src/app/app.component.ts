import { Component, DestroyRef, OnInit, effect, inject, signal,computed } from "@angular/core";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import {interval, Observable, Subscriber, Subscription } from 'rxjs';

// import { map } from 'rxjs/operators'; 

 @Component({
 selector:'app-root',
 standalone:true,
 imports:[],
 templateUrl:'./app.Component.html',
})
 
export class AppComponent implements OnInit{
  clickCount=signal(0);   
  clickCount$=toObservable(this.clickCount);
  interval$=interval(1000);
  intervalSignal=toSignal(this.interval$);

  customIntervals$ = new Observable((Subscriber) => {
  
    let timesExecuted = 0;

   const interval = setInterval(() => {
    //  Subscriber.error();

       if( timesExecuted < 5 ){
          clearInterval(interval);
          Subscriber.complete();
          return;
       }
        console.log('Emitting new value...');
        Subscriber.next({message:'New Value'});
        timesExecuted++;
    }, 6000);

  });

//    interval=signal(0);  
//    doubleInterval = computed(() => {this.interval() * 2}); 
  private destroyRef=inject(DestroyRef);


  constructor(){
    // effect(() => {
    //     console.log(`Clicked Button ! ${this.clickCount()} times.`);
    // });
    
  }
 
    ngOnInit(): void {
      
    //  setInterval(() =>{
    //     this.interval.update((preavIntervalNumber => preavIntervalNumber +1));
    //     //update some signals.
    //  },1000); 

    // const subscription = interval(1000).pipe(
    //     map((val) => val * 2)
    // ).subscribe({
    //     next:(val) => console.log(val)
    //   }); 

    //   this.destroyRef.onDestroy(() =>{
    //     subscription.unsubscribe();
    //   });
  this.customIntervals$.subscribe({
    next:(val)=> console.log(val),
    complete : () => console.log('COMPLETED!'),
    error : (errr)=> console.log('errr')
    }); 

    const subscription=this.clickCount$.subscribe({
        next:(val) =>  console.log(`Clicked Button ! ${this.clickCount()} times.`)
     }); 
       this.destroyRef.onDestroy(() =>{
        subscription.unsubscribe();
      });
  }
 onClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}