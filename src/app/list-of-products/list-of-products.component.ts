import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApptusService} from '../apptus.service';
import {Product} from '../product';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  navigationSubscription: any;
  pageEvent: PageEvent;
  categoryKey: string;
  count: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.count = this.route.snapshot.data['products'].count;
    this.products = this.route.snapshot.data['products'].products;
    this.categoryKey = this.route.snapshot.paramMap.get('key');
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
    this.products = this.route.snapshot.data['products'].products;
  }

  pageNext(event: PageEvent) {
    console.log('pageNext');
    const pageNumber = event.pageIndex + 1;
    // event.pageSize: 24
    // event.previousPageIndex: 1
    // this.router.navigate(['category'], { queryParams: {key: 1907548051, page_number: pageNumber}, queryParamsHandling: 'merge'});
    // this.router.navigate(['/category', {page_number: pageNumber}]);
    // this.route.url.value[1]
    // this.router.navigate(['page', {page_number: pageNumber}], {relativeTo: this.route});
    // this.router.navigate(['.'], {relativeTo: this.route, queryParams: {page_number: pageNumber}, queryParamsHandling: 'merge'});
    // this.router.navigate(['category'], {queryParams: {page_number: pageNumber, key: this.categoryKey}});
    this.router.navigate(['category', {page_number: pageNumber, key: this.categoryKey}]);

  }

}
