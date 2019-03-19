import { Injectable } from '@angular/core';

 
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  students = [
    { id:1, firstName: 'Akshatha', lastName: 'AM', email:'akshatha@gmail.com', phone:'1234' },
    { id:2, firstName: 'Rakesh', lastName: 'KM', email:'rakesh@gmail.com', phone:'123456' }
  ];
  constructor(){}
getStudents(){
  if(localStorage.getItem('students') != null){
    this.students = JSON.parse(localStorage.getItem('students'));
  }
return this.students;
}
addStudents(student){
  var updated = false;
  for(var i = 0; i < this.students.length; i++){
    if(student.id == this.students[i].id){
      updated = true;
      this.students[i] = student;
      localStorage.setItem('students', JSON.stringify(this.students));
      break;
    }
  }
if(!updated){
 student.id = Math.round(Math.random()*1000000);
  this.students.push(student);
  localStorage.setItem('students', JSON.stringify(this.students));
}
}
deleteAllStudents(id){
  for(var i = 0; i< this.students.length; i++){
    this.students.splice(i, this.students.length);
  }
}
deleteStudent(a){
  for(var i = 0; i< this.students.length; i++){
    if(a.id == this.students[i].id){
      this.students.splice(i, a.id);
    }
  }
}

getStudentById(id:number){
  for(var i = 0; i<this.students.length; i++){
    if(this.students[i].id==id){
      return this.students[i];
      break;
    }
   
    }
  };


}
