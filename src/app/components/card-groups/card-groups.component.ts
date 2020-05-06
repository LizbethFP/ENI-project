import { Component, OnInit } from '@angular/core';
import {
  ProductProperties,
  allProducts
} from './../../enums/product.enum';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-card-groups',
  templateUrl: './card-groups.component.html',
  styleUrls: ['./card-groups.component.scss']
})
export class CardGroupsComponent implements OnInit {

  constructor() { }

  ProductProperties = ProductProperties;

  productList = allProducts;

  ngOnInit(): void {
    this.getProducts(this.productList);
  }


  getProducts(data) {
    const products = [];

    data.map(element => {
      // let filteredProducts = ;
      products.push(element);
    });

    return products;
  }

  getProductsKeys(data) {
    const keys = [];
    let objectKeys;

    data.map(element => {
      objectKeys = Object.keys(element);
      keys.push(objectKeys);

    });

    return keys;
  }

  getProductsValues(data) {
    const values = [];
    let objectValues;

    data.map(element => {
      objectValues = Object.values(element);
      values.push(objectValues);

    });
    return values;
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }


  /*   getAlmostAllKeys(data) {
      data.forEach((item, index) = => {
        for (let key in item) {
          console.log(item[key], index);
        }
      });
    });
  }*/

}
