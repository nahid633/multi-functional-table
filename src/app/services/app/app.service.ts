import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService extends HttpService{
  public POSTS_URL = 'posts';

  constructor( public http: HttpClient) {
    super();
  }
  getPosts(params: any = {}): Observable<any> {
    return this.get(this.http, this.POSTS_URL, params);
  }
  addPost(item: any, params: any = {}): Observable<any> {
    return this.post(this.http, this.POSTS_URL, item, params);

  }
}
