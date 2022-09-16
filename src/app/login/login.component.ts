import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {  Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { RegistrationComponent } from '../registration/registration.component';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 user=new User();
 msg='';
  route: any;
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    
    
    this._service.loginUserFromRemote(this.user).subscribe(
    data =>{
      console.log("data is"+data);
      localStorage.setItem("userData",JSON.stringify(data));
      sessionStorage.setItem("UserName",data.userName);
console.log("name",data.userName);
      //console.log("response received");
      this._router.navigate(['/menu'])
    },
    error =>{ 
      console.log("exception occured");
      this.msg="Bad Credentials,Please Enter Valid Email Id and Password";
    }
      )
  
  }

  gotoregistration()

{

}
}
