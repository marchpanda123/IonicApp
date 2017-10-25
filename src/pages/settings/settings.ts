import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  // dummy data for users
  user = {
    first_name: 'Duy Thanh',
    last_name: 'Dao',
    email: 'successdt@hotmail.com',
    country_code: 84,
    phone: '123456789'
  };

  constructor(public nav: NavController) {}
}