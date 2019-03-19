import { Component, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
   
  
  person:any={};
  
  persons=[
    {id:1,name:"Ram",phone:"456789",email:"ram@gmail.com",adress:"Bangalore"},
  {id:2,name:"AthmaRam",phone:"3456789",email:"athmaram@gmail.com",adress:"Anantapur"}
 ];


addPerson(){


  var update=false;
    for(var i=0;i<this.persons.length;i++){

    if(this.person.id==this.persons[i].id){
      update=true;
      this.person=this.persons[i];
      break;
    }
  }
      if(!update){
        this.persons.push(this.person);
      }
    
    this.person={
      id:"",
      name:"",
      phone:"",
      email:"",
      adress:""
  
    }

  }
  // for(var i=0;i<this.persons.length;i++) {

  // if(this.person.id==p.id){
    

  //   }
  // }

  // this.persons.push(this.person);

  // this.person={
  //   id:"",
  //   name:"",
  //   phone:"",
  //   email:"",
  //   adress:""

  // }

  


deletePerson(p){

 for(var i=0;i<this.persons.length;i++) {


  if(p.id==this.persons[i].id){
    this.persons.splice(i,1);
  }
 };

};
deleteAllPersons(){
  this.persons.length=0;
}

selectedPerson={id:"",name:"",phone:"",email:"",adress:""};

clickPerson:Boolean=false;
onSelect(p){
this.clickPerson=true;
this.selectedPerson=p;
};



deletePersonWithId(p){
  for(var i=0;i<this.persons.length;i++) {

  if(this.person.id==this.persons[i].id){
    this.persons.splice(i,1);

  }
}

};

selectPerson(person){
  
  this.person=person;

  
};


  constructor() { }

  ngOnInit() {
  }

}
