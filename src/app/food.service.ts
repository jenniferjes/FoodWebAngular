import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
foodItem:Food | undefined;
 
  constructor( private _http : HttpClient) { }

 
  public getFoodList(): Observable<any>{

    console.log("hello service.ts");
    return this._http.post<any>(`${"http://localhost:8081/displayfood"}`,'')
   
   }
}
