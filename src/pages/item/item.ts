import {Component} from '@angular/core';
import {NavController, ToastController, NavParams} from 'ionic-angular';

import {ItemService} from '../../providers/item-service';
import {CartPage} from "../cart/cart";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  item: any;
  quantity = 1;

  constructor(public nav: NavController, public itemService: ItemService, public toastCtrl: ToastController, public navParams: NavParams) {
    // set data for item
    this.item = itemService.getItem(navParams.get('id'));
  }

  // plus quantity
  plusQty() {
    this.quantity++;
  }

  // minus quantity
  minusQty() {
    if (this.quantity > 1)
      this.quantity--;
  }

  // add item to cart
  addCart() {
    let toast = this.toastCtrl.create({
      message: 'Item added to cart',
      duration: 3000,
      position: 'middle'
    });

    toast.present();
  }

  // go to cart page
  goToCart() {
    this.nav.push(CartPage);
  }
}