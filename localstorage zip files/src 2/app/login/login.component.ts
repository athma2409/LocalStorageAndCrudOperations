import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username:string="";
  Password:string="";
  constructor(private router:Router,public alertController: AlertController) { }


  onLogin(){

if(this.username==this.Password){
  this.router.navigate(['/dashboard']);

}else{
  this.presentAlert(); 
this.username="";
this.Password="";
}
  

 };


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      subHeader: 'Try again',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }











  ngOnInit() {}

}
