import { Observable, Subject } from 'rxjs';
import * as product from './myProduct.json';
export class ProductService {
itemAdd = new Subject<any>();
filterd = new Subject<any>();
filterdData=[]

Allproducts: any = (product as any).default; 
  private prodQunitity = [];


  getItems(){
      return this.prodQunitity.slice();
  }

  addQuntity (product:number){
   this.prodQunitity.push(product);
   this.itemAdd.next(this.prodQunitity.slice());
  }


  deleteItem(id:number){
      this.prodQunitity.splice(id,1);
      this.itemAdd.next(this.prodQunitity.slice());
  }



  
  filterition(prc1 , prc2,prc3,cat1,cat2,products){
  if( cat1&&prc1){

    this.filterdData = products.filter((i)=>( i.category == "camera" && i.price <200 && i.price >50));
    this.filterd.next(this.filterdData.slice());
  }

  else if(cat1&&prc2){
    this.filterdData = products.filter((i)=>( i.category == "camera" && i.price <400 && i.price >200));
    this.filterd.next(this.filterdData.slice());
    }

    
  else if(cat1&&prc3){
    this.filterdData = products.filter((i)=>( i.category == "camera" &&  i.price >400));
    this.filterd.next(this.filterdData.slice());
  }


  else if(cat2&&prc1){
    this.filterdData = products.filter((i)=>( i.category == "Lighting" && i.price <200 && i.price >50));
    this.filterd.next(this.filterdData.slice());
  
  }



  else if(cat2&&prc2){
    this.filterdData = products.filter((i)=>( i.category == "Lighting" && i.price <400 && i.price >200));
    this.filterd.next(this.filterdData.slice());
  
  }




  else if(cat2&&prc3){
    this.filterdData = products.filter((i)=>( i.category == "Lighting" &&  i.price >400));
    this.filterd.next(this.filterdData.slice());
  }


 

  else if(cat1){
    this.filterdData = products.filter((i)=>( i.category == "camera"));
    this.filterd.next(this.filterdData.slice());
  }

  else if(cat2){
    this.filterdData = products.filter((i)=>( i.category == "Lighting"));
    this.filterd.next(this.filterdData.slice());
  }
  else if(prc1){
    this.filterdData = products.filter((i)=>( i.price <200 && i.price >50));
    this.filterd.next(this.filterdData.slice());
  }

  else if(prc2){
    this.filterdData = products.filter((i)=>( i.price <400 && i.price >200));
    this.filterd.next(this.filterdData.slice());
  }


  else if(prc3){
    this.filterdData = products.filter((i)=>( i.price >400));
    this.filterd.next(this.filterdData.slice());
  
  }



  else{
  this.filterdData=products;
  this.filterd.next(this.filterdData.slice());
  }

  return this.filterdData;
}
  

}