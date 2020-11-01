
import { Component, OnInit , TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import * as data from './myImages.json';
import * as blog from './blog.json';
import * as trends from './trends.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})

export class HomeComponent implements OnInit{

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
  }

  picData: any = (data as any).default;  
  blogData: any = (blog as any).default;  
  TrendData: any = (trends as any).default;  

  Books =[{image:"https://scontent.fjrs14-1.fna.fbcdn.net/v/t1.15752-9/120928166_689550165245648_6504726808975464876_n.png?_nc_cat=104&_nc_sid=ae9488&_nc_ohc=2a2Husw0-jUAX8Pv1vE&_nc_ht=scontent.fjrs14-1.fna&oh=0bbd2df49f499ae841dcabcbf86387ec&oe=5FA25604"},
  {image:"https://cdn3.focuscamera.com/media/bannerslider/d/e/desktop_61.png"}
,{image:"https://cdn3.focuscamera.com/media/bannerslider/d/e/desktopb_1.png"}
,{image:"https://www.focuscamera.com/wavelength/wp-content/uploads/2020/09/Newsweek-BOS-2021-1180x559-1-887x420.png"}];
  customOptions = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: false,
        dots: false,
   
    responsive: {
      0: {
        items: 1
      },

      500: {
        items: 1
      },
      940: {
        items: 1
      },

      1280: {
        items: 1
      },
    },

  }
  ngOnInit() {
     console.log(this.picData)
  }


}