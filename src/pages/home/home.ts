import { ApiClientProvider } from './../../providers/api-client/api-client';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  leds: Array<boolean>;

  constructor(public navCtrl: NavController, public apiClient: ApiClientProvider) {
    this.leds = [];
    for(var i = 0; i < 5; i++) {
      this.leds.push(false);
    }
  }

  updateItem(item) {
    // console.log('Led1: ', this.led1);
    // console.log('Item: ', item);
    // console.log(this.leds);
    this.apiClient.post(this.leds).then(res => {
      
    }).catch(err => {
      console.log("Err: ", err);
    })
  }

  ionViewDidLoad() {

  }
}
