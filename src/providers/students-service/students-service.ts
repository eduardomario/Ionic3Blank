import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../../model/student-model';
import { CREATE_USER } from '../../endPoints/endpoints';

/*
  Generated class for the StudentsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentsServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StudentsServiceProvider Provider');
  }

  createAccountStudents(account: Students){
    return this.http.post(CREATE_USER,account);
  }

}
