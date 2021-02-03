import { Component, OnInit } from '@angular/core';
import {UserPostsService} from '../services/user-posts.service';

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
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {

  userPosts: UserPost[] = [];

  constructor(
    private userPostsService: UserPostsService) {  }

  getUserPosts(){
    this.userPostsService.getAllPosts().subscribe(
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
