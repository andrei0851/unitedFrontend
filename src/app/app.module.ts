import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeedComponent } from './feed/feed.component';
import { UserPostComponent } from './user-post/user-post.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FollowingComponent } from './following/following.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    PageNotFoundComponent,
    FeedComponent,
    UserPostComponent,
    LoginComponent,
    HomeComponent,
    FollowingComponent,
    MyprofileComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
