import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CostumerPage } from '../costumer/costumer';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  user:string;
  data:any;
  colorLabel: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data;
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goCostumer(){
    console.log('goToCostumer');
    //this.navCtrl.push(CostumerPage);
    setTimeout(() => {
      this.colorLabel = 'danger';
    },3*1000)
  }

  logout(){
    console.log('goToHome');
    this.navCtrl.popToRoot();
  }

}
