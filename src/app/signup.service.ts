import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupClass } from './signup-class';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  //Declear the baseUrl variable
  private baseUrl="http://localhost:9001/admin/addnew";
  
  //Pass instance of the httpclient to the constructor
  constructor(private httpClient:HttpClient) { }

  //Create Signup User method
  //Pass an object to it, not its obsverable type
  SignupUser(signupClass: SignupClass):Observable<object>{
    console.log(signupClass);
    return this.httpClient.post(`${this.baseUrl}`,signupClass);
   }
   
}
