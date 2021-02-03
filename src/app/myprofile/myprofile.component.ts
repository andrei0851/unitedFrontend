import { Component, OnInit } from '@angular/core';
import {UserPostsService} from '../services/user-posts.service';
import {UserService} from '../services/user.service';

export class UserPost {
  id: number;
  userName: string;
  text: string;
  imageLink: string;
  likes: number;

  constructor(
    id: number,
    imageLink: string,
    userName: string,
    text: string,
    likes: number,
  ) {
    this.id = id;
    this.imageLink=imageLink;
    this.text = text;
    this.userName = userName;
    this.likes = likes;
  }
}

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  userPosts: UserPost[] = [];
  profileName: string = window.localStorage.getItem('UserName');

  constructor(
    private userPostsService: UserPostsService, private userService: UserService) {  }

  getUserPosts(){
    this.userPostsService.getMyPosts(window.localStorage.getItem('UserName')).subscribe(
      (userPosts: UserPost[]) => {
        this.userPosts = userPosts;
      },
      (error) => {
        console.error(error);
      }

    );
  }

  ngOnInit(): void {
    this.getUserPosts();
  }

}
