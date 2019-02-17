import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpService
  ) { }

    userInfo(){
      var obj = {}
      obj['token'] = localStorage.getItem("token")
      console.log(obj);
      return this.http.post( "/api/v1/users/info",obj);
    }
}
