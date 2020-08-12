import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductRepository } from '../model/product-repository';
import { StaticDataSourceService } from '../model/static-data-source';
import { StoreComponent } from './store/store.component';
import { Cart } from './../model/cart.model';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductRepository, StaticDataSourceService, Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }
