import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomePageModule' },
            {path:'login' ,component:LoginComponent},
            {path:'dashboard' ,component:DashboardComponent},
            {path:'list-customer' ,component:ListCustomerComponent},
            {path:'add-customer' ,component:AddCustomerComponent},
            {path:'about' ,component:AboutComponent},
            {path:'customer' ,component:CustomerComponent},
            {path:'edit-customer/:id' ,component:EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
