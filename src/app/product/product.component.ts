import { Component ,OnInit , OnChanges} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {CartService} from '../shared/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit ,OnChanges{

  constructor(private productService : ProductService , private cartSer:CartService ){
    this.products=this.productService.Allproducts;
  }

images = [
    {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/DSLR.jpg", txt:"DSLR"},
    {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/mirrorless_1.jpg" , txt:"MirrorLess"},
    {src: "https://cdn3.focuscamera.com/media//catalog/category/cache/medium_format.jpg" , txt:'Medium Format'},
    {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/point_n_shoot.jpg" , txt:'Point & Shot'},
    {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/Untitled-3.jpg" , txt:'instant'},
    {src: "https://cdn3.focuscamera.com/media//catalog/category/cache/specialty_1.jpg" , txt:"specialty"},
]
myitem;
items=[];
products =[]; 
prc1=false;
prc2=false;
prc3=false;
cat1=false;
cat2=false;


price1(event){
  if ( event.target.checked ) {
    this.prc1 =  true;
}
else{
  this.prc1=false;
}
this.filter();
}

price2(event){
  if ( event.target.checked ) {
    this.prc2 = true;
}

else  {
  this.prc2=false
}
this.filter();
}

price3(event){
  if ( event.target.checked ) {
    this.prc3 =  true;
}

else{
  this.prc3=false;
}
this.filter();
  
}

category1(event){
  if ( event.target.checked ) {
    this.cat1 = true;
}
else{
  this.cat1=false;
}
this.filter();
}

category2(event){
  if ( event.target.checked ) {
    this.cat2 = true;
}
else{
  this.cat2=false;
}
this.filter();
}


filter(){
  if( this.cat1&&this.prc1&&!this.cat2){

    this.products = this.products.filter((i)=>( i.category == "camera" && i.price <200 && i.price >50));
  }

  else if(this.cat1&&this.prc2){
    this.products = this.products.filter((i)=>( i.category == "camera" && i.price <400 && i.price >200));
    
    }

    
  else if(this.cat1&&this.prc3){
    this.products = this.products.filter((i)=>( i.category == "camera" &&  i.price >400));
  }


  else if(this.cat2&&this.prc1){
    this.products = this.products.filter((i)=>( i.category == "Lighting" && i.price <200 && i.price >50));
  
  }



  else if(this.cat2&&this.prc2){
    this.products = this.products.filter((i)=>( i.category == "Lighting" && i.price <400 && i.price >200));
  
  }




  else if(this.cat2&&this.prc3){
    this.products = this.products.filter((i)=>( i.category == "Lighting" &&  i.price >400));
  }


 

  else if(this.cat1){
    this.products = this.products.filter((i)=>( i.category == "camera"));
  }

  else if(this.cat2){
    this.products = this.products.filter((i)=>( i.category == "Lighting"));
  }
  else if(this.prc1){
    this.products = this.products.filter((i)=>( i.price <200 && i.price >50));
  }

  else if(this.prc2){
    this.products = this.products.filter((i)=>( i.price <400 && i.price >200));
  }


  else if(this.prc3){
    this.products = this.products.filter((i)=>( i.price >400));
  
  }



  else{
  this.products=this.productService.Allproducts;
  }
}

onAddQuntity(product){
var it =Number(this.myitem);
var res=false;
var all = this.cartSer.getItems();
for(let i =0 ; i<all.length;i++){
  if(all[i].product.id==product.id){
    all[i].it = all[i].it + it;
    res=true;
  }
}
if(!res){
this.cartSer.addToCart({product,it});
}
window.alert('your product has been added to the cart!')
}

 

  ngOnInit(){
  //this.filter();
    console.log(this.products)
   
  }
  ngOnChanges(){
    this.filter();
  }

}
