import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  token: string;
  firstName: string;

  constructor(private userService: UserService) {
  this.firstName=window.localStorage.getItem("UserName");
  }

  logout(): void{
    window.localStorage.setItem('token','');
    window.location.reload()
  }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
  }
}
