import {Component} from '@angular/core';
import {NavController,ToastController} from 'ionic-angular';
import {MainTabsPage} from "../main-tabs/main-tabs";
import { User } from '../../models/user/user.interface';
import { RegisterServiceProvider } from '../../providers/register-service/register-service';
import { LoginResponse } from '../../models/loginResponse/loginResponse.interface';


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  loginResponse = {} as LoginResponse;

  constructor(public nav: NavController, private registerService: RegisterServiceProvider, private toast: ToastController) {}

  // register
  signUp() {
    this.registerService.register(this.user).subscribe((res)=>{
      this.loginResponse = res.json();
      if(this.loginResponse.success){
        this.toast.create({
          message: '账户申请成功: ' + this.user.username,
          duration: 3000
        }).present();
        this.nav.setRoot(MainTabsPage);
      }else{
        this.toast.create({
          message: this.loginResponse.message,
          duration: 3000
        }).present();
      }
    });
  }
}
