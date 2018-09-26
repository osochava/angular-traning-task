import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {ApptusService} from './apptus.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Product} from './product';

const IMAGEPREFIX = 'https://s3.eu-central-1.amazonaws.com/showcase-demo-images/fashion';

@Injectable()
export class AppResolver implements Resolve<any>  {

  constructor(private apptusService: ApptusService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const key = route.queryParamMap.get('key');
    const page_number = route.queryParamMap.get('page_number');
    const pageNumber = page_number ? +page_number : 0;
    let sortProducts = route.queryParamMap.get('sort_products');
    sortProducts = sortProducts ? sortProducts : 'relevance desc';
    return this.apptusService.getCategoryPage(key, sortProducts, pageNumber).pipe(map(
      data => {
        const count: number = data.count[0].count;
        const products = data['productListing'][0].products;
        return {
          products: products.map(productData => this.convertDataToProductList(productData)),
          count: count,
          page_number: pageNumber
        };
      }
      ),
      catchError(this.handleError<Product>('data not available at this time'))
    );
  }

  convertDataToProductList(data) {
    const image_local = (data.variants && data.variants.length) ? data.variants[0].attributes.image_local : data.attributes.image_local;
    const image = image_local ? IMAGEPREFIX + '/images/' + image_local : '';
    return  {
      key: data.key,
      product_name: data.attributes.product_name,
      product_description: data.attributes.product_description,
      product_key: data.attributes.product_key,
      price_formatted: data.attributes.price_formatted,
      image: image
    };
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
