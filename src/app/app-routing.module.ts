import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreGuard } from './store.guard';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    canActivate: [StoreGuard]
  },
  {
    path: 'cart-details',
    component: CartDetailsComponent,
    canActivate: [StoreGuard]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [StoreGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [StoreGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/store'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [StoreGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
