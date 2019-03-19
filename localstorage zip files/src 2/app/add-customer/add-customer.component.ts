import { Component, OnInit } from '@angular/core';
import {CustomerService } from '../customer.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit 
{

      constructor(  private customerService:CustomerService ) { }

      customer={id:"",name:"",phone:"",email:"",adress:"" };

      id:number;

      addCustomer(customer)
      {
        this.customerService.addCustomer(customer);
        this.customer={id:"",name:"",phone:"",email:"",adress:"" };
      }

      ngOnInit() 
      {

      }


}
