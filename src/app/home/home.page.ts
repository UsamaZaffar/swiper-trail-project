import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('swiper') swiper: any;

  testImages = [
    "../../assets/images/2.jpg",
    "../../assets/images/1.jpg",
    "../../assets/images/4.jpg",
    "../../assets/images/5.jpg",
    "../../assets/images/3.jpg",
  ]
  iconPath = [
    "assets/icon/icon-1.svg",
    "assets/icon/icon-2.svg",
    "assets/icon/icon-3.svg",
    "assets/icon/icon-4.svg",
    "assets/icon/icon-5.svg"
  ]

  constructor() {
  }

  changeImage(index:number){
    this.swiper.nativeElement.swiper.slideTo(index)
  }

}
