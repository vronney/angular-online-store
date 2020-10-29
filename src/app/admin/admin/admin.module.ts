import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthComponent } from '../auth/auth.component';
import { AdminComponent } from '../admin/admin.component';

const routing: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
      path: 'main',
      component: AdminComponent
  },
  {
      path: '**',
      redirectTo: 'auth'
  }
];

@NgModule ({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forChild(routing)],
  declarations: [AuthComponent, AdminComponent]
})

export class AdminModule { }
