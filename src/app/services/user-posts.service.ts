import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  private readonly resourceUrl: string = '/Posts';
  private readonly baseUrl : string  = environment.server;

  constructor(private http: HttpClient) { }

  addUserPost(body) {
    return this.http.post(`${this.baseUrl}${this.resourceUrl}` + "/addpost", body);
  }

  getFollowPosts(user: string){
    const params: HttpParams = new HttpParams().set('user', user);
    return this.http.get(`${this.baseUrl}${this.resourceUrl}` + "/getFollowingPosts", {params: params});
  }
  getMyPosts(UserName: string){
    const params: HttpParams = new HttpParams().set('UserName', UserName);
    return this.http.get(`${this.baseUrl}${this.resourceUrl}` + "/getUserPosts", {params: params});
  }

  getAllPosts(){
    return this.http.get(`${this.baseUrl}${this.resourceUrl}` + "/getAllPosts");
}
  like(postID: string, UserName: string){
    const params: HttpParams = new HttpParams().set('postID', postID).set('UserName', UserName);
    return this.http.post(`${this.baseUrl}${this.resourceUrl}` + "/like",null, {params: params});
  }

  delete(postID: string){
    const params: HttpParams = new HttpParams().set('postID', postID);
    return this.http.delete(`${this.baseUrl}${this.resourceUrl}` + "/deletePost", {params: params});
  }

}
