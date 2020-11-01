
import {Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'

})

export class CartService {
    CartChanged = new Subject<any>();
    item = [];

    addToCart(product){
        this.item.push(product);
        this.CartChanged.next(this.item.slice());
    }

    getItems(){
        return this.item;
    }

    update(index:number,qty:number){
     this.item[index].it=qty;
    }


    remove(item:number){
   this.item.splice(item,1)
   this.CartChanged.next(this.item.slice());
    }
  
}