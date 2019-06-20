import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ItemComponent } from './component/item/item.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule ,Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './component/footer/footer.component';
import { OrderComponent } from './component/order/order.component';


const routes1:Routes=[
  {
    path:'customers',
    component: CustomerComponent

  },

  {
    path:'items',
    component:ItemComponent
  },
  {
    path:'orders',
    component:OrderComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }

  
];

@NgModule({
  declarations: [
    //add all user Interfaces
    AppComponent,
    CustomerComponent,
    ItemComponent,
    DashboardComponent,
    FooterComponent,
    OrderComponent
  ],
  imports: [

    //add all modules
    RouterModule.forRoot(routes1),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [

  //  add services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
