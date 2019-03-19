import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class CustomerService {
constructor()
    { 

            var defaultList=[ 
                              {id:1,name:"Athma",email:"athma@gmail.com",phone:"0976543",adress:"ATP"},
                              {id:2,name:"Ram",email:"ram@gmail.com",phone:"2134567",adress:"bangalore"},
                        ];

              if(localStorage.getItem('customers')==null || JSON.parse(localStorage.getItem('customers')).length==0)
              {        
                
                this.customers=defaultList;
                this.setLocalStorageCustomer(this.customers);
              }else
              {
                this.getLocalStorageCustomers();      
              }
      }



getLocalStorageCustomers(){
  this.customers=JSON.parse(localStorage.getItem('customers'));

}
setLocalStorageCustomer(list){
localStorage.setItem('customers',JSON.stringify(list));
}

    customers=[
      {id:1,name:"Athma",email:"athma@gmail.com",phone:"0976543",adress:"ATP"},
      {id:2,name:"Ram",email:"ram@gmail.com",phone:"2134567",adress:"bangalore"},
    ]

    customer:any=[];

    getCustomer()
    {
        // var customers=[];
        // if(localStorage.getItem('customers')!=null)
        //   {
        //   customers=JSON.parse(localStorage.getItem('customers'));
        //   }
        return this.customers;
    }

    addCustomer(customer)
    {
          customer.id=Math.round(Math.random()*100000);
          this.customers.push(customer);
          // localStorage.setItem('persons',JSON.stringify(this.customers));
          this.setLocalStorageCustomer(this.customers);


    }
      
    updateCustomer(customer)
    {
          for(var i=0;i<this.customers.length;i++)
          {
            if(this.customers[i].id==customer.id)
              {
              this.customers[i]=customer;
              }
          }
          // localStorage.setItem('customers',JSON.stringify(this.customers));
          this.setLocalStorageCustomer(this.customers);

    }

    deleteCustomer(c)
    {
          
        for (var i=0;i<this.customers.length;i++)
        {
            if(c.id==this.customers[i].id)
            {
              this.customers.splice(i,c.id);
            }
        }
        this.setLocalStorageCustomer(this.customers);

        // localStorage.setItem('persons',JSON.stringify(this.customers));
    }

    deleteAllCustomers()
    {
      this.customers.length=0;
    // localStorage.setItem('persons',JSON.stringify(this.customers));
    this.setLocalStorageCustomer(this.customers);

    }

    getCustomerById(id)
    {
      for(var i=0;i<this.customers.length;i++)
      {
          if(id==this.customers[i].id)
          {
            return this.customers[i];
            break;
          }
      }
      // localStorage.setItem('persons',JSON.stringify(this.customers));
      this.setLocalStorageCustomer(this.customers);


    }



    
}

