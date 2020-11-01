import { Component  , OnInit , Input } from '@angular/core';
import{ProductService} from '../shared/product.service';
import {CartService} from '../shared/cart.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

orders=[];
qty;
allProduct = []

constructor(private ser : ProductService ,private router:Router,private activatedRoute: ActivatedRoute , private carS : CartService  ){ 
  this.allProduct = this.ser.Allproducts;
}



onRemove(item:number){
this.carS.remove(item);
}


onUpdate(item:number){
  this.carS.update(item , this.qty);
}

allmarket(){
  this.orders= this.carS.getItems();
}


ngOnInit(){

this.allmarket()
this.carS.CartChanged.subscribe(
  (orders :[] )=> {
    this.orders=orders

})

console.log(this.orders)


}

}
