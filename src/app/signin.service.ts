import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SigninClass } from './signin-class';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  //Declear the baseUrl variable
  private baseUrl="http://localhost:9001/admin/login";
  
  //Pass instance of the httpclient to the constructor
  constructor(private httpClient:HttpClient) { }

  //Create Signup User method
  //Pass an object to it, not its obsverable type
  SigninUser(signinClass: SigninClass):Observable<object>{
    console.log(signinClass);
    return this.httpClient.post(`${this.baseUrl}`,signinClass);
   }
}
