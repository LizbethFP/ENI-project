import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  ProductProperties,
  allProducts
} from './../../enums/product.enum';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-carousel-modal',
  templateUrl: './carousel-modal.component.html',
  styleUrls: ['./carousel-modal.component.scss']
})
export class CarouselModalComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  // activeTab = 0;

  productList = allProducts;
  ProductProperties = ProductProperties;
  boatPicture = './../../../assets/cruise.png';

  modalRef: BsModalRef;


  ngOnInit() {
    /*     this.activeTab = 0;
        console.log('actual tab', this.activeTab); */
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
  /*   selectTab(index: number) {
      this.activeTab = index;
      console.log(this.activeTab);
    } */

}
