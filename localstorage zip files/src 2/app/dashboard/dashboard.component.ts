import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(private router:Router,public alertController: AlertController) { }

  onLogout(){
  this.router.navigate(['/login']);
  }



  ngOnInit() {}

}
