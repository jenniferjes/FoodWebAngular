import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FoodService } from '../food.service';
import { CartComponent } from '../cart/cart.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public totalFoodItem:number=0;
  public loggedName: string | null | undefined;
  public cartCount: string | null | undefined;
  

  user: any;
  userDisplayName: any;
  userDisplayId: any;
  count: any;
  

  constructor(private cartService:CartService,private cart: CartComponent,private route: Router) { }

  ngOnInit(): void {

  this.loggedName=sessionStorage.getItem("UserName");
  console.log(this.loggedName);

  this.cartCount=localStorage.getItem("cart_count");
  console.log("cartcount",this.cartCount);
 // this.getcartCount();
 this.user = JSON.parse(localStorage.getItem('userData')!);

 this.userDisplayName = this.user.userName;

 this.userDisplayId = this.user.id;

this.getCount();

console.log(this.user.id)
  
}
getCount(){

  this.cartService.getCount(this.user).subscribe(data =>

    {

 this.count =data;

    })     
    console.log(this.count);
  }

}