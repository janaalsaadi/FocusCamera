import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import{CartComponent} from './cart/cart.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent},
    { path: 'product', component: ProductComponent },
    {path:'cart' , component:CartComponent}

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }