import { Component, OnInit } from '@angular/core';
import {ApptusService} from '../apptus.service';
import {Product} from '../product';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {
  products: Product[];
  apptusService: ApptusService;
  constructor(service: ApptusService) {
    this.apptusService = service;
  }

  ngOnInit() {
    this.apptusService.getProducts('category-page').subscribe(data => {
      this.products = data;
    });
  }

}
