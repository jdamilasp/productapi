import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false;
  token: string = '';
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    if(token){
      this.isLogin = true;
    }
  }

  logout() {
    this.loginService.logout();
    this.isLogin = false;
    this.router.navigate(["/login"])
  }

}
