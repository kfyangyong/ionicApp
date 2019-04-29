import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public news:any[] = []

  constructor() { }

  ngOnInit() {

    for(let i=0; i < 50; i++){
      this.news.push("这是一条消息")
    }
  }

}
