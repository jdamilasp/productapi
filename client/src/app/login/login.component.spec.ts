import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule }    from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { LoginComponent } from './login.component';
import { AppRoutingModule } from './../app-routing.module';
import { SignupComponent } from '../signup/signup.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule , AppRoutingModule ],
      declarations: [ LoginComponent,SignupComponent, PageNotFoundComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
