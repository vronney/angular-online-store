import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';

let routing = RouterModule.forChild([
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
]);

@NgModule ({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AuthComponent, AdminComponent]
})

export class AdminModule { }
