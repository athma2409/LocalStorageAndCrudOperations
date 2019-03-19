import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ListCustomerComponent} from './list-customer/list-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [AppComponent,EditComponent,
    LoginComponent,DashboardComponent,ListCustomerComponent,AddCustomerComponent,AboutComponent,CustomerComponent],

    
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule, AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
