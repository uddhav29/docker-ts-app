import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Http, Request, Response, Headers, RequestOptions} from '@angular/http'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


const routes : Routes =[
  {path:'search', component:SearchComponent},
  {path:'customer-details',component:CustomerDetailsComponent}
]


@NgModule({
  declarations: [
      AppComponent,
    CustomerDetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpModule,FormsModule
  ],
  providers: [CustomerDetailsComponent,SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
