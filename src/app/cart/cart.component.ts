import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  public userId!: string | null;
  public dataDetail: any;
 
  public cartArray:any=[];
 
  public countvar!: number;
  public cart:any;
  public grandTotal!: number;
  getCount: any;
  public oldPrice!: number;

  constructor( private service:CartService,private route: Router){}
msg!:string;
  ngOnInit(): void {

    this.showCart();
    
  }
  showCart()
  {
    this.dataDetail=JSON.parse(localStorage.getItem("userData")!);
    this.service.showCart(this.dataDetail).subscribe(data=>{
      console.log("inside show cart");
    this.cartArray=data;
    console.log(this.cartArray)
    this.countvar=this.cartArray.length
    console.log("cartarraylength",this.countvar);
    localStorage.setItem("cart_count", JSON.stringify(this.cartArray.length));
    console.log("countincart",localStorage.getItem("cart_count"));
    })
    
   
   
  }
  refresh(): void {

}

  deleteItem(cart: any) {

    this.service.deleteItem(cart).subscribe(

      data => {



        console.log('deleted response', data);

        alert("item Deleted Successfully!");
        // this.getCartData();

         //this.reloadCurrentRoute();

      }

    )
   this.reloadCurrentRoute();
  }
 

inc(data:any)
{
  data.foodQty=data.foodQty+1;
  //data.foodPrice=data.foodPrice+data.foodQty;
 // console.log("fprice",data.foodPrice);
  this.service.plusQty(data).subscribe(
    data=>{
      console.log(data);
    }
  )
}

dec(data:any)
{
  data.foodQty=data.foodQty-1;
 
  this.service.minusQty(data).subscribe(
    data=>{
      console.log(data);
    }
  )
}



    reloadCurrentRoute() {
      let currentUrl=this.route.url;
     this.route.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
      this.route.navigate([currentUrl]);
        });
      }
}
