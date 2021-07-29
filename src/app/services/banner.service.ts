import { Component } from '@angular/core';

@Component({
  selector: 'banner-service',
  templateUrl: '../app.component.html',
})
export class BannerService {
  bannerImages = [
    'assets/images/img1.jpeg',
    'assets/images/img2.jpg',
    'assets/images/img3.jpg',
  ];
  getBannerImages(): string[] {
    return this.bannerImages;
  }
}
