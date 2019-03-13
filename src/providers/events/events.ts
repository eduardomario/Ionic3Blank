import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loading } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {

  isLoading = new Subject<boolean>();

  constructor(public http: HttpClient) {
    console.log('Hello EventsProvider Provider');
  }

  setIsLoading(loading:boolean){
    this.isLoading.next(loading);
  }

  getIsLoading(){
    return this.isLoading.asObservable();
  }

}
