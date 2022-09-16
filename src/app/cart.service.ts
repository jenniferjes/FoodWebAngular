import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './cart';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  
  private baseURL="http://localhost:8081";
  constructor(private httpClient:HttpClient) { }

  public addToCart(cart:Cart):Observable<any>{
    return this.httpClient.post(`${this.baseURL}/addToCart`,cart)
  }
   
  public showCart(user:User):Observable<any>{
    return this.httpClient.post(`${this.baseURL}/showCart`,user)

  }

    public deleteItem(cart:Cart):Observable<any>{
      return this.httpClient.post(`${this.baseURL}/delete`,cart)
    }

public getCount(user: User): Observable<any>{

  return this.httpClient.post<any>(`${"http://localhost:8081/count"}`,user);
}

  public plusQty(code: any): Observable<any>{

    return this.httpClient.post<any>(`${"http://localhost:8081/plus"}`,code);

  }
  public minusQty(code: any): Observable<any>{

    return this.httpClient.post<any>(`${"http://localhost:8081/minus"}`,code);

  }
  }
