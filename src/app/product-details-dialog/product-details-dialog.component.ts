import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Product} from '../product';

@Component({
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.css']
})
export class ProductDetailsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Product) {}

}
