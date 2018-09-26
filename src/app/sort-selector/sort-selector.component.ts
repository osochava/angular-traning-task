import {Component, OnInit} from '@angular/core';

export interface Sort {
  value: string;
  label: string;
}

@Component({
  selector: 'app-sort-selector',
  templateUrl: './sort-selector.component.html',
  styleUrls: ['./sort-selector.component.css']
})
export class SortSelectorComponent implements OnInit {
  selected: string;
  sorts: Sort[] = [
    {
      value: 'relevance desc',
      label: 'Relevance'
    },
    {
      value: 'sort_date desc',
      label: 'Date of arrivals'
    },
    {
      value: 'current_price asc',
      label: 'Price low to high'
    },
    {
      value: 'current_price desc',
      label: 'Price high to low'
    }
  ];

  ngOnInit() {
    this.selected = this.sorts[0].value;
  }
}
