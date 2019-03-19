import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName='';
  password='';
  data = {userName:'', password:''}
  constructor(private router: Router) { }

  ngOnInit() {
  }
  doLogin(){
    if(this.data.userName == this.data.password){
      this.router.navigate(['/students']);
    }
  }
  about(){
    this.router.navigate(['/aboutus']);
  }

}
