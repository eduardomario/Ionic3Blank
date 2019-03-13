import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateAccountPage } from '../create-account/create-account';
import { LoginProviderMock } from '../../mock/loginProviderMock';
import { Students } from '../../model/student-model';
import { LoginProvider } from '../../providers/login/login';
import { EventsProvider } from '../../providers/events/events';

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
  

  constructor(
    public navCtrl: NavController, 
    private navParams: NavParams, 
    private loading: LoadingController,
    private login_provider: LoginProvider,
    private fb:FormBuilder,
    private events_manager:EventsProvider) {
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
    this.events_manager.setIsLoading(true);
    this.login_provider
      .loginService(
        this.loginForm.get('user').value,
        this.loginForm.get('pwd').value)
      .subscribe((response) => {
        console.log(response);
        this.events_manager.setIsLoading(false);
        this.navCtrl.push(AboutPage,response);
      }, error => {
        this.events_manager.setIsLoading(false);
        console.log(error);        
      });
    
  }

  createUser(){
    console.log('goToCreate');
    this.navCtrl.push(CreateAccountPage);
  }

}
