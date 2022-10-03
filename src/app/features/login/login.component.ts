import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showLoginForm = true;

  hideLoginComp = true;

  users: any;

  userForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }
  )

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  showRagisterFn() {
    this.showLoginForm = !this.showLoginForm
  }

  loginFn() {
    this.router.navigateByUrl('taskList');
    this.hideLoginComp = false;
  }

  registerFn() {
    this.showLoginForm = !this.showLoginForm
  }




}



