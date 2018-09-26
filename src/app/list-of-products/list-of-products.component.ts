import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {PageEvent} from '@angular/material';
import {MatPaginator} from '@angular/material';

export interface Sort {
  value: string;
  label: string;
}

const sorts: Sort[] = [
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

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})

export class ListOfProductsComponent implements OnInit, OnDestroy {
  selected: string;
  products: Product[];
  navigationSubscription: any;
  pageEvent: PageEvent;
  pageIndex: number;
  count: number;
  sorts: Sort[] = sorts;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.count = this.activatedRoute.snapshot.data['products'].count;
    this.products = this.activatedRoute.snapshot.data['products'].products;
    this.paginator.pageIndex = this.pageIndex ? this.pageIndex : 0;
    this.selected = this.selected ? this.selected : sorts[0].value;
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.pageIndex = +queryParams['page_number'];
      this.selected = queryParams['sort_products'];
    });
    this.initialiseInvites();
  }

  onSortChanges = (value: string) => {
    console.log('onSortChanges');
    const sort = value;
    this.router.navigate([], {relativeTo: this.activatedRoute,
      queryParams: {sort_products: sort, page_number: 0}, queryParamsHandling: 'merge'});
  }

  pageNext(event: PageEvent) {
    console.log('pageNext');
    const pageNumber = event.pageIndex;
    // event.pageSize: 24
    // event.previousPageIndex: 1
    this.router.navigate([], {relativeTo: this.activatedRoute,
      queryParams: {page_number: pageNumber}, queryParamsHandling: 'merge'});
  }

}
