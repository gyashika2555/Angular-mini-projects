import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef, OnInit, DestroyRef} from '@angular/core';
import { MessagesService } from '../../messages.service';
// import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
 
@Component({
  selector: 'app-messages-list',
  standalone:true,
  imports: [AsyncPipe],
  templateUrl: './messages-list.html',
  styleUrl: './messages-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesList {
//  messages= input.required<string[]>();

 private messageService=inject(MessagesService);
 messages$=this.messageService.messages$;


//  private cdRef=inject(ChangeDetectorRef);
//  private destroyRef=inject(DestroyRef);

//  messages : string []=[];  

//  get messages(){
//   return this.messageService.allMessages;
//  }


//  ngOnInit(){
//     this.messageService.messages$.subscribe((messages) =>{
//       this.messages=messages;
//       this.cdRef.markForCheck();
    // });
    // this.destroyRef.onDestroy(() =>{
    //   Subscription.unsubscribe();
    // })
//  }
//  messages=this.messageService.allMessages


 get debugOutput(){
    console.log(`[MessagesList] "debugOutput" binding re-evaluated.`);
    return `MessagesList Component Debug Output`;
  }

}
