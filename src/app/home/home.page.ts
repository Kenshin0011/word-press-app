import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Post {
  ID: number;
  title: string;
  content: string;
  date: string;
}

interface PostsResponse {
  posts: Post[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: Post[] = [];
  constructor(
    public http: HttpClient,
  ) {}

  ionViewDidEnter() {
    this.http.get<PostsResponse>('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts')
      .subscribe(data => {
        this.posts = data.posts;
      })
  }
}