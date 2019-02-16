import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../_services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  singupForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signupService: SignupService
  ) { }

  ngOnInit() {
    this.singupForm = this.formBuilder.group({
      firstName: ['john', Validators.required],
      email: ['john@gmail.com', Validators.required],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

    // convenience getter for easy access to form fields
  get f() { return this.singupForm.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.singupForm.invalid){
      return;
    }

    this.loading = true;

    this.loading = true;
    let loginObj = {
      firstName: this.f.firstName.value, 
      email : this.f.email.value, 
      password: this.f.password.value
    }
    this.signupService.signup(loginObj).subscribe(      
      (data) => {
        console.log(" Response ", data);

        this.router.navigate(["/dashboard"])
      },(err: any) => {
        console.log(" Error ", err);

        this.loading = false;
      })

  }

}
