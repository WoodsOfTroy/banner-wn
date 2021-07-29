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
  // bannerImages =  {
  //      img1: { path: 'assets/images/img1.jpeg', styles: '' },
  //      img2: { path: 'assets/images/img2.jpg', styles: '' },
  //      img3: { path: 'assets/images/img3.jpg', styles: '' },
  //    };
  //    getBannerImages(): string[] {
  //      return this.bannerImages;
  //    }
}
