import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule }    from '@angular/forms';

import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { SignupComponent } from './signup.component';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, ReactiveFormsModule ],
      declarations: [ SignupComponent, LoginComponent, PageNotFoundComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
