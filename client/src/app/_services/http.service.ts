import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  post(url: string, obj: any){
    return this.http.post<any>(`${environment.apiUrl}` + url, obj)      
  }
  
}
