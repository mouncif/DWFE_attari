import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user:User;
  onAddOrUpdate: boolean = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getter();
    console.log(this.user);
    if(this.user.id == undefined)
    {
      this.onAddOrUpdate = true; 
    }else{
      this.onAddOrUpdate = false;
    }
  }
  processForm(){
    if(this.user.id == undefined){
      this.onAddOrUpdate = true;
      console.log('r');
      this.userService.createUser(this.user).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl('/users');
      });
    }
    else
    {
      this.onAddOrUpdate = false;
      this.userService.updateUser(this.user).subscribe(res=>{
        this.router.navigateByUrl('/users');
        console.log(res);
      });
    }
  }
}
