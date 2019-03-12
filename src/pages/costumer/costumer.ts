import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the CostumerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-costumer',
  templateUrl: 'costumer.html',
})
export class CostumerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CostumerPage');
  }

  goBack(){
    console.log('goToAbout');
    this.navCtrl.pop();
  }

  logout(){
    console.log('goToHome');
    this.navCtrl.popToRoot();
  }

}
