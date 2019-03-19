import { Component, OnInit } from '@angular/core';
import {CustomerService } from '../customer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {

  constructor( private customerService:CustomerService,private router:Router) { }
  
customer=[];

  ngOnInit() {

    this.customer=this.customerService.customers;
  }

deleteCustomer(c){
  this.customerService.deleteCustomer(c);
}

deleteAllCustomers(){
  this.customerService.deleteAllCustomers();
}

onSelect(id){
 console.log("id "+JSON.stringify(id));
  this.router.navigate(['/edit-customer/'+id]);
}


}
