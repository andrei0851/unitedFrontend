import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FeedComponent } from './feed/feed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {FollowingComponent} from './following/following.component';
import {MyprofileComponent} from './myprofile/myprofile.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'register', pathMatch: 'full' },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'following',
    canActivate: [AuthGuardService],
    component: FollowingComponent,
  },
  {
    path: 'myprofile',
    canActivate: [AuthGuardService],
    component: MyprofileComponent,
  },
  {
    path: 'feed',
    canActivate: [AuthGuardService],
    component: FeedComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
