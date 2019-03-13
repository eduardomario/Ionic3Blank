import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:string;
  group:string;
  cursos:string[] = [
    'Ionic',
    'Docker',
    'Java',
    'Angular',
    'Net',
    'Liquibase'
  ];
  money:number;
  loginForm:FormGroup;

  constructor(public navCtrl: NavController, private navParams: NavParams, private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      user:['', Validators.required],
      pwd:['', Validators.required]
    });
  }

  goAbout(){
    console.log('goToAbout');
    let data = { user:this.user,group:this.group, cursos:this.cursos,money:this.money,date: new Date,};
    console.log(data);
    this.navCtrl.push(AboutPage,data);
  }

  login(){
    console.log('login');
    let data = { user:this.user,group:this.group, cursos:this.cursos,money:this.money,date: new Date,};
    console.log(data);
    this.navCtrl.push(AboutPage,data);
  }

}
