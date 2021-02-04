import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPost } from '../feed/feed.component';
import {UserPostsService} from '../services/user-posts.service';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css'],
})
export class UserPostComponent implements OnInit {
  @Input() userPost: UserPost;

  deletable :boolean

  constructor(private router: Router, private userPostsService: UserPostsService, private userService: UserService) {
  }


  ngOnInit(): void {
    if(this.userPost.userName == window.localStorage.getItem('UserName')){
      this.deletable=true;
    }
  }

  like() {
    this.userPostsService.like(this.userPost.id.toString(),window.localStorage.getItem('UserName')).subscribe((response: any) => {
      if(response.status == 'liked'){
        window.alert('Post Liked.')
      }
      if(response.status == 'unliked'){
        window.alert('Post Unliked.')
      }
      window.location.reload();
    });
  }

  delete() {
    this.userPostsService.delete(this.userPost.id.toString()).subscribe((response: any) => {
      if (response.status == 'Success') {
        window.alert('Post deleted.')
      }
      window.location.reload();
    });
  }

  follow() {
    this.userService.follow(window.localStorage.getItem('UserName'), this.userPost.userName).subscribe((response: any) => {
      if (response.status == 'follow') {
        window.alert('User Followed.')
      }
      if (response.status == 'unfollow') {
        window.alert('User Unfollowed.')
      }
      if (response.status == 'sameUser') {
        window.alert('You cannot follow yourself.')
      }
      window.location.reload();
    })
  }

}
