import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bannerImages = [
    '../../assets/images/img1.webp',
    '../../assets/images/img2.webp',
    '../../assets/images/img3.webp',
  ];
}
