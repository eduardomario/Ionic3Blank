import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';
import { LOGIN_USER } from '../../endPoints/endpoints';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  loginService(user:String, pwd:String){
    return this.http.post(LOGIN_USER,{
      "username":user,
      "password":pwd
    });
    
  }

}
