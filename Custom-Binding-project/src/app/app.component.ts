import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RectComponent } from "./rect/rect.component";
 
@Component({
selector:'app-component',
standalone:true,
imports:[FormsModule, RectComponent],
templateUrl:'./app.component.html',
styleUrl:'./app.component.html'
})


export class AppComponent{
 rectSize ={
    width:'100',
    height:'100',
 };

}