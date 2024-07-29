import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { WordpressService } from "../wordpress.service";
import { IPost } from "../interfaces/post";

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  ID!: number;
  post: IPost = {
    ID: 0,
    title: '',
    content: '',
    date: '',
  }

  constructor(
    public route: ActivatedRoute,
    public wordpressService: WordpressService,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.ID = parseInt(<string>params.get('articleId'), 10);
      })
  }

  ionViewDidEnter() {
    this.wordpressService.getArticle(this.ID)
      .subscribe(data => {
        this.post = data;
      })
  }
}
