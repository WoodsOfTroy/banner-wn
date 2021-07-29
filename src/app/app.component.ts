import { Component, OnInit } from '@angular/core';
import { BannerService } from './services/banner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BannerService],
})
export class AppComponent implements OnInit {
  images: string[] = [];

  constructor(private bannerService: BannerService) {}
  ngOnInit() {
    this.images = this.bannerService.getBannerImages();
  }
}
