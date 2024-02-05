import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpClient: HttpClient) { }


  avoirToutLesPosts(){
    return this._httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts/")
  }

  avoirUnPost(id: number){
    return this._httpClient.get<Post>("https://jsonplaceholder.typicode.com/posts/" + id)
  }

  posterUnPost(post: Post){
    return this._httpClient.post<void>("https://jsonplaceholder.typicode.com/posts/", post)
  }

}

