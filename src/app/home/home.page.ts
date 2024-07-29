import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { LoadingController } from "@ionic/angular";

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
    public loadingController: LoadingController,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
    this.http.get<PostsResponse>('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/')
      .subscribe(data => {
        this.posts = data.posts;
        loading.dismiss();
      })
  }
}
