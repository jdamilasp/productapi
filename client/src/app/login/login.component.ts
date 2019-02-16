import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading: Boolean = false;
  submitted: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['john@gmail.com', Validators.required],
      password: ['123456', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    let loginObj = { 
      email : this.f.email.value, 
      password: this.f.password.value
    };
    this.loginService.login(loginObj).subscribe(      
      (data) => {
        console.log(" Response ", data);

        this.router.navigate(["/dashboard"])
      },(err: any) => {
        console.log(" Error ", err);
        
        this.loading = false;
      })
  } 

}
