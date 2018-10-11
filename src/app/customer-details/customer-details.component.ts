import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerId : string="";
  name : string ="";
  taxId :string
  role: string ="";
  contactNumber: string ="";
  address: string ="";
  amount: string ="";

  constructor(private http: Http) {
   
   }

  ngOnInit() { }

getCustomerDetails(){
  console.log(this.customerId);
  var restUrl  = "http://35.239.153.174:8085/employee/";
  restUrl=restUrl.concat(this.customerId);
  console.log(restUrl);

  this.http.get(restUrl).subscribe((res) => {
    console.log(res.json());
    this.name=res.json().name;
    this.taxId= res.json().taxId;
    this.role=res.json().role;
    this.contactNumber=res.json().contactNumber;
    this.address=res.json().address;
    this.amount=res.json().amount;
  
  }
   );
console.log(this.amount);
}

}
