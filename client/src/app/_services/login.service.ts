import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(
    private http: HttpService
  ) { }

    login(obj){
      return this.http.post( "/user/login", obj)
        .pipe(map((response) => {
          // If token in response store in localstorage
          if(response && response.token){
            localStorage.setItem('token', JSON.stringify(response.token)); 
          }
          return response;
        }));
    }

    logout() {
      localStorage.setItem('token', ""); 
      return true;
    }

}