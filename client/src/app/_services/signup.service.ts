import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpService
  
  ) { }

    signup(obj){
      return this.http.post("/user/signup", obj);
    }
}
