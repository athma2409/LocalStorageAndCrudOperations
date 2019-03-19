import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = this.studentService.getStudents();
  // students = [
  //   { id:1, firstName: 'Akshatha', lastName: 'AM', email:'akshatha@gmail.com', phone:'1234' },
  //   { id:2, firstName: 'Rakesh', lastName: 'KM', email:'rakesh@gmail.com', phone:'123456' }
  // ];
  student: any = { id:0, firstName:'', lastName:'', email:'', phone:''}
  
  constructor(private router : Router,  private studentService : StudentServiceService) {
   }

  ngOnInit() {
  }
  getStudentById(id){
    this.studentService.getStudentById(id);
    }
    addUpdateStudent(student){
      this.studentService.addStudents(student);
      this.studentService.getStudents();
    //   var updated = false;
    //   for(var i = 0; i < this.students.length; i++){
    //     if(this.student.id == this.students[i].id){
    //       updated = true;
    //       this.students[i] = this.student;
    //       break;
    //     }
    //   }
    // if(!updated){
    //  // this.student.id = Math.round(Math.random()*1000000);
    //   this.students.push(this.student);
    // }
    // this.resetStudent();
    }
    deleteAllStudents(students){
      this.studentService.deleteAllStudents(students);
      this.studentService.getStudents();
      // for(var i = 0; i< this.students.length; i++){
      //   this.students.splice(i, this.students.length);
      // }
    }
    deleteStudent(a){
      this.studentService.deleteStudent(a);
      // for(var i = 0; i< this.students.length; i++){
      //   if(a.id == this.students[i].id){
      //     this.students.splice(i, a.id);
      //   }
      // }
    }
    onSelect(a){
      this.student = a;
    }
    logout(){
      this.router.navigate(['/login']);
    }
    addUpdate
    
    }

