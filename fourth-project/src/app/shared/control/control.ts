import {
  Component,
  HostBinding,
  HostListener,
  input,
  inject,
  ElementRef,
  afterRenderEffect,
  ViewEncapsulation,
  ContentChild,
  contentChild,
  AfterContentInit,
  afterNextRender,
  
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }

})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class')  className= 'control';
  // @HostListener('click') onClick(){
  //   console.log('Clicked !');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  //  @ContentChild('input') private control?: ElementRef<HTMLInputElement |
  //   HTMLTextAreaElement>;

   constructor() {
     afterRenderEffect(( ) => {
       console.log('afterRenderEffect');
     });

     afterNextRender(() => {
       console.log(' afterNextRender');
     });
   }

   ngAfterContentInit() {
    //  console.log('AFTER CONTENT INIT');
    //  console.log('')
   }

  private control = 
  contentChild<ElementRef< HTMLInputElement  | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('Clicked !');
    console.log(this.el);
    console.log(this.control());
  }
}
