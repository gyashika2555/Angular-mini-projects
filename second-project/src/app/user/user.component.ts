import { Component , EventEmitter, Input , Output} from '@angular/core';
import { type User } from './user.models';
// import { DUMMY_USERS } from '../dummy-users'; 


// const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length);

// type User ={
//   id:string;
//   avatar:string;
//   name:string;
// }

// interface User{
//   id:string;
//   avatar:string;
//   name:string;
// }

@Component({
  selector: 'app-user',
  standalone:true,
  // imports: [DUMMY_USERS],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
// selectedUser= DUMMY_USERS[randomIndex];

// selectedUser= signal (DUMMY_USERS[randomIndex]);
// imagePath = computed (() => 'assets/users/' + this.selectedUser().avatar)

// get imagePath(){
// return 'assets/users/' + this.selectedUser.avatar
// }


//  onSelectUser(){
//   console.log('clicked!');
//  }

// onSelectUser(){
//   const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length);
//   this.selectedUser.set(DUMMY_USERS[randomIndex])
//   this.selectedUser = DUMMY_USERS[randomIndex];

//  }

  //  @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
   @Input({required:true}) user!:User;
   
  //  {
  //    id:string;
  //    avatar:string;
  //    name:string;
  //  };

   @Output() select=new EventEmitter();

  get imagePath(){
    return 'assets/users/'+ this.user.avatar;
  }


  onSelectUser(){
   this.select.emit(this.user.id);
  } 

 }
