import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninClass } from '../signin-class';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-sign-in-section',
  templateUrl: './sign-in-section.component.html',
  styleUrls: ['./sign-in-section.component.css']
})
export class SignInSectionComponent implements OnInit {

  
    //Creating Signup User object
    SigninClass:SigninClass =new SigninClass();

    constructor(
      //Injects the service,router
      private router: Router,
      private signinService:SigninService
    ) { }
  
    ngOnInit(): void {
    }
  
    //Signup User function
    userSignin(){
  
      this.signinService.SigninUser(this.SigninClass).subscribe(data=>{
        alert("Login successful");
        this.router.navigate(['/dashboard']);
      },error=>alert(" Login Unsuccessful"));
     
    }
}
