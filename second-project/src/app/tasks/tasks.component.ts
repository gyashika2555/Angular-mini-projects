import { Component ,Input} from '@angular/core';
import { TasksssComponent } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [TasksssComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) userId? : string;
@Input( {required:true}) name? : string;
 
tasks=[
  {
  id:'p1',
  userId:'p1',
  title:'Happiness , peace ',
  summary:'I wanna become a Software Developer.',
  dueDate:'25 May, 2005',
   },
    {
  id:'p2',
  userId:'p2',
  title:'Hardworking ',
  summary:'My Father is a Businessman.',
  dueDate:'18 October,1981',
   },
    {
  id:'p3',
  userId:'p3',
  title:'Cute , Sweet',
  summary:'My Mother is a Housewife.',
  dueDate:'15 September ,1082',
   },
    {
  id:'p4',
  userId:'p4',
  title:'BCA(baap ke cash pe ashhhh) ',
  summary:'My brother is in 12th grade.',
  dueDate:'17 July,2008',
   },

];
 
get selectedUserTasks(){
  return this.tasks.filter((task) => task.userId === this.userId);
}

}
