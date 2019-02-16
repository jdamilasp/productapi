import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpService
  
  ) { }

    signup(obj){
      return this.http.post("/api/v1/users", obj)
      .pipe(map((response) => {
        // If token in response store in localstorage
        if(response && response.token){
          localStorage.setItem('token', JSON.stringify(response.token)); 
        }
        return response;
      }));
    }
}
