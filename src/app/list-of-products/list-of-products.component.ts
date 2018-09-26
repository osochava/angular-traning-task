import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ApptusService} from '../apptus.service';
import {Product} from '../product';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {PageEvent} from '@angular/material';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  navigationSubscription: any;
  pageEvent: PageEvent;
  pageIndex: number;
  count: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
    // this.navigationSubscription = this.activatedRoute.params.subscribe(params => {
    //   this.initialiseInvites(); // reset and set based on new parameter this time
    // });

  }

  initialiseInvites() {
    this.count = this.activatedRoute.snapshot.data['products'].count;
    this.products = this.activatedRoute.snapshot.data['products'].products;
    // this.pageIndex  = this.activatedRoute.snapshot.data['page_number'];
    this.paginator.pageIndex = this.pageIndex ? this.pageIndex : 0;
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.pageIndex = +queryParams['page_number'];
    })
    this.initialiseInvites();
  }

  pageNext(event: PageEvent) {
    console.log('pageNext');
    const pageNumber = event.pageIndex;
    // event.pageSize: 24
    // event.previousPageIndex: 1
    this.router.navigate([], {relativeTo: this.activatedRoute, queryParams: {page_number: pageNumber}, queryParamsHandling: 'merge'});
  }

}
