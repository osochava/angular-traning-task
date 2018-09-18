import { Component, OnInit } from '@angular/core';
import {ApptusService} from '../apptus.service';
import {Product} from '../product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {
  products: Product[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
  }

}
