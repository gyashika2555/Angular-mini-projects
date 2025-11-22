import { 
    Component,  ViewChild,  ElementRef, AfterViewInit,  OnInit, Output,
    EventEmitter, output } from "@angular/core";
import { ControlComponent } from "../../../shared/control/control";
import { ButtonComponent } from "../../../shared/button/button";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-new-tickets',
    imports: [ControlComponent, ButtonComponent, FormsModule],
    templateUrl: './new-ticket.html',
    styleUrl: './new-ticket.css',
})

export class NewTicketsComponent implements OnInit, AfterViewInit {
     @ViewChild('form') private form?:ElementRef<HTMLFormElement>;

    // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
    // @Output() add= new EventEmittter<{title:string; text:string}>();  

     add= output<{title:string; text:string}>();

   ngOnInit(): void {
       console.log('ON INIT');
        console.log(this.form?.nativeElement);
   }


    ngAfterViewInit(): void {
        console.log('AFTER VIEW INIT');
        console.log(this.form?.nativeElement);
    }

    onSubmit(title: string, ticketText: string){
        this.add.emit({title:title, text:ticketText})
         this.form?.nativeElement.reset();
    }
  


    // onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
    //     console.log(title);
    //     console.log(ticketText);
    //     //    this.form?.nativeElement.reset();
    //     this.form?.nativeElement.reset();
    // }

    //  onSubmit(titleElement :HTMLInputElement){
    //      const enteredTitle = titleElement.value;
    //      console.log('ENTERED SOME VALUE HERE : ' +enteredTitle);


    //     // console.dir(titleElement);
    //     // console.log(titleElement);
    //     //   console.log('submitted !');
    //  }
}