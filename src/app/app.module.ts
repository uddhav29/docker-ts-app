import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes : Routes =[
  {path:'customer-details',component:CustomerDetailsComponent}
]


@NgModule({
  declarations: [
      AppComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [CustomerDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
