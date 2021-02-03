import { Component, OnInit } from '@angular/core';
import {  AbstractControl,  FormBuilder,  FormGroup,  ValidatorFn,  Validators,} from '@angular/forms';
import {UserPostsService} from '../services/user-posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postForm: FormGroup;
  token: string;
  UserName: string;

  constructor(private formBuilder: FormBuilder, private userPostsService: UserPostsService) {
  }

  ngOnInit(): void {
    this.createform();
    this.UserName=window.localStorage.getItem('UserName');
    this.token = window.localStorage.getItem('token');
  }

  createform(): void {
    this.postForm = this.formBuilder.group({
      UserName:window.localStorage.getItem('UserName'),
      text:[null],
      imglink:[null],
    });
  }

  addPost() {
    if (this.postForm.invalid) {
      return;
    }
    this.userPostsService.addUserPost(this.postForm.value).subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    });

  }
  get text(): AbstractControl {
    return this.postForm.get('text');
  }
  get imglink(): AbstractControl {
    return this.postForm.get('imglink');
  }
}
