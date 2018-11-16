import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public rootUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor() {
  }

  get(http: HttpClient, resourceUrl: string, params: any = {}): Observable<any> {
    return http.get(this.rootUrl + '/' + resourceUrl, {
      params: params
    });
  }

  post(http: HttpClient, resourceUrl: string, item: any, params: any = {}): Observable<any> {
    return http.post(this.rootUrl + '/' + resourceUrl, item, {
      params: params
    });
  }

  put(http: HttpClient, resourceUrl: string, item: any, params: any = {}): Observable<any> {
    return http.put(this.rootUrl + '/' + resourceUrl + '/' + item.id, item, {
      params: params
    });
  }

  delete(http: HttpClient, resourceUrl: string, params: any = {}): Observable<any> {
    return http.delete(this.rootUrl + '/' + resourceUrl, {
      params: params
    });
  }
}
