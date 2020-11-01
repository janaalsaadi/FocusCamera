import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {ProductComponent} from './product/product.component';
import {FooterComponent} from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductService} from './shared/product.service';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    FooterComponent,
   
  
  ],
  imports: [BrowserModule, FormsModule,AppRoutingModule,CarouselModule,BrowserAnimationsModule,ModalModule.forRoot()],
  providers: [ ProductService,BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule {}
