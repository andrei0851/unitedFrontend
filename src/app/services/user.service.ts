import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly resourceUrl: string = '/User';
  private readonly baseUrl : string  = environment.server;


  constructor(private http: HttpClient) { }


  follow(myUser: string, followUser: string){
    const params: HttpParams = new HttpParams().set('myUser', myUser).set('followUser', followUser);
    return this.http.post(`${this.baseUrl}${this.resourceUrl}` + "/Follow",null, {params: params});

  }

  isfollowed(myUser: string, followUser: string){
    const params: HttpParams = new HttpParams().set('myUser', myUser).set('followUser', followUser);
    return this.http.get(`${this.baseUrl}${this.resourceUrl}` + "/isFollowed", {params: params});
  }

}
