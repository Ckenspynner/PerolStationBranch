import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupClass } from '../signup-class';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-sign-up-section',
  templateUrl: './sign-up-section.component.html',
  styleUrls: ['./sign-up-section.component.css']
})
export class SignUpSectionComponent implements OnInit {

    //Creating Signup User object
    SignupClass:SignupClass =new SignupClass();

    constructor(
      //Injects the service,router
      private router: Router,
      private signupService:SignupService
    ) { }
  
    ngOnInit(): void {
    }
  
    //Signup User function
    userSignup(){
  
      this.signupService.SignupUser(this.SignupClass).subscribe(data=>{
        alert("Registration successful");
        this.router.navigate(['/login']);
      },error=>alert(" Registration Unsuccessful Try Another Email or Username"));
     
    }
}
