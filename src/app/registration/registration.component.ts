import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { User } from '../user';

import { Route, Router } from '@angular/router';

import { RegistrationService } from '../registration.service';

 



@Component({

  selector: 'app-registration',

  templateUrl: './registration.component.html',

  styleUrls: ['./registration.component.scss']

})

export class RegistrationComponent implements OnInit {

   user = new User();

   msg = '';

  constructor( private _service : RegistrationService, private _router : Router) { }



  ngOnInit(): void {
    
  }

  registerUser( ){

    this._service.registerUserFromRemote(this.user).subscribe(

      data => {
        console.log(data);
        this._router.navigate(['/login'])

        console.log("response received");

this.msg ="Registration Successful";

    },

      error => {

        console.log("Exception Occured");

        this.msg = error.error;

      }

     

    );

  }



}