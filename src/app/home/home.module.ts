import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { ArticlePage } from "../article/article.page";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: ':articleId',
        component: ArticlePage,
      }
    ])
  ],
  declarations: [HomePage, ArticlePage]
})
export class HomePageModule {}
