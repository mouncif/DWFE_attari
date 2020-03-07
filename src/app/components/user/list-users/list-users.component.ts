import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  
  users: User[] = [];
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.findAll().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }

  deleteUser(user: User){
    this.userService.deleteUser(user.id).subscribe(res=>{
      console.log(res);
      this.users.splice(this.users.indexOf(user), 1);
    });
  }

  updateUser(user: User){
    this.userService.setter(user);
    this.router.navigateByUrl('/user-form');
  }
  newUser(){
    let user :User;
    this.userService.setter(user);
    this.router.navigateByUrl('/user-form');
  }
}
