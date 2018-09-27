import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-listitem-productcard',
  templateUrl: './listitem-productcard.component.html',
  styleUrls: ['./listitem-productcard.component.css']
})
export class ListitemProductcardComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
