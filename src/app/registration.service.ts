import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class RegistrationService {
private baseURL="http://localhost:8081";
  constructor(private _http:HttpClient) { }

 
  public loginUserFromRemote(user: User): Observable<any>{

   // return this._http.post<any>("http://localhost:8081/login",user)
    return this._http.post(`${this.baseURL}/login`,user) }



 public registerUserFromRemote(user: User): Observable<any>{

  return this._http.post(`${this.baseURL}/registeruser`,user) }



}

