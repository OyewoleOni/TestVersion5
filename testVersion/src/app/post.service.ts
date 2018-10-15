import { IPost } from './IPost';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  private url ='https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url)
          .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || 'Server Error');
  }
  creatPost(post):Observable<IPost>{
    return this.httpClient.post<IPost>(this.url,JSON.stringify(post))
        .catch(this.errorHandler);
  }
  updatePost(post):Observable<IPost>{
   return this.httpClient.put<IPost>(this.url+'/'+post.id,JSON.stringify(post));
  }

  deletePost(post){
    return this.httpClient.delete(this.url+'/'+post.id);
      
   }
  }

