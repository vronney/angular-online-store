import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductRepository } from '../model/product-repository';
import { StoreComponent } from './store/store.component';
import { Cart } from './../model/cart.model';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { Order } from './../model/order.model';
import { OrderRepository } from './../model/order.repository';
import { AuthService } from 'src/model/auth.service';
import { AdminModule } from './admin/admin/admin.module';
import { RestDataSource } from 'src/model/rest.datasource';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartSummaryComponent,
    CartDetailsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
    ProductRepository,
    Cart,
    Order,
    OrderRepository,
    AuthService,
    RestDataSource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
