import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Food } from '../food';
import { CartService } from '../cart.service';


import { FoodService } from '../food.service';
import { Cart } from '../cart';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public foodItem:any;
  foodarr = new Food();

  msg ='';
  userId:any
  dataDetail: any;
  public cartItem:Cart=new Cart();
  //public cart: any;
  

 constructor(  private service:FoodService,private router: Router,private CartService:CartService) { }

 ngOnInit(){
  this.dataDetail=JSON.parse(localStorage.getItem("userData")!);

this.service.getFoodList().subscribe(data =>

  {

    console.log(data);

  this.foodItem = of(data)
    
  });


  
}


addToCart(data:any){
  
  this.cartItem.userId=this.dataDetail.id;
  //this.cartItem.cartId=data.cartId;
  this.cartItem.foodImage=data.foodImage;
  console.log("img",this.cartItem.foodImage);
  this.cartItem.foodName=data.foodName;
  console.log(this.cartItem.foodName);
  this.cartItem.foodId=data.foodId;
  this.cartItem.foodPrice=data.foodPrice;
  this.cartItem.foodDesc=data.foodDesc;
  this.cartItem.foodQty=1;

  this.CartService.addToCart(this.cartItem).subscribe(

    cartData => {
      console.log("cartData",cartData);
      this.reloadCurrentRoute();


this.msg ="cart Successful";

alert("Item added to Cart !");



console.log("id",this.dataDetail.id);

// this.dataDetail =this.userId;



  },

    error => {

      console.log("Exception Occured");

      this.msg = error.error;

    }

   

  );}
// addToCart(cart:any){
// console.log("iddd",this.dataDetail.id);
// this.cart.userId=this.dataDetail.id;
// this.cart.foodQty=1;
// console.log("in");
// this.CartService.addToCart(this.cart).subscribe(data=>{
//   console.log("inn");
//   this.cart=data;
//   console.log("%",data);
//   alert("Added Successfully");
//   //this.dataDetail =this.userId;
//   console.log("%%%",this.dataDetail);
//   this.reloadCurrentRoute();
// })


// }

reloadCurrentRoute() {
  let currentUrl=this.router.url;
 this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
  this.router.navigate([currentUrl]);
    });
  }
 

}
