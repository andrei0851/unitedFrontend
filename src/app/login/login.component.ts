import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../services/account.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private userService: UserService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  submit(){
    if (this.loginForm.invalid){
      return;
    }
    this.accountService.login(this.loginForm.value).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('token', response.token);
      localStorage.setItem('UserName', response.firstName);
      window.location.reload()
    });

  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
