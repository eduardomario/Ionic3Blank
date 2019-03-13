import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginProviderMock{
    constructor(private http:HttpClient){
        
    }

    loginService(user:String, pwd:String){
        return this.http.get('../assets/json/login.json');
    }
}