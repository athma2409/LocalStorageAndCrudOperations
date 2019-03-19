import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService:CustomerService) { }
  



  id: number;
  private sub: any;
  customer:any;

  ngOnInit() 
  {
     this.sub = this.route.params.subscribe(params =>
       {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("id is "+this.id);
       this.customer = this.customerService.getCustomerById(this.id);

       // In a real app: dispatch action to load the details here.
     });
  }


  updateCustomer(customer)
  {
    this.customerService.updateCustomer(customer);
    this.customer={id:"",name:"",phone:"",email:"",adress:"" }
  }


}



