import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Product} from './product';


@Injectable({
  providedIn: 'root'
})
export class ApptusService {

  constructor(private httpClient: HttpClient) {
  }

  public get(url: string): Observable<any> {
    const baseUTL = 'https://api.esales.apptus.com/clusters/w2AC5A25F/panels/';
    const params = new HttpParams()
      .set('sessionKey', 'anonymous0')
      .set('customerKey', 'anonymous0')
      .set('market', 'UK');
    const options = {params: params};
    return this.httpClient.get(baseUTL + url, options);
  }

  public getProducts(url: string): Observable<Product[]> {
    const baseUTL = 'https://api.esales.apptus.com/clusters/w2AC5A25F/panels/';
    const params = new HttpParams()
      .set('sessionKey', 'anonymous0')
      .set('customerKey', 'anonymous0')
      .set('arg.category_id', '-1658200885')
      .set('arg.shop_language', 'en_US')
      .set('arg.facets', '')
      .set('arg.sort_products', 'relevance desc')
      .set('arg.window_first', '1')
      .set('arg.window_last', '24')
    ;
    const options = {params: params};
    return this.httpClient.get(baseUTL + url, options).pipe(map(
      data =>  data['productListing'][0].products.map(productData => this.convertDataToProductList(productData))
    ));
  }

  convertDataToProductList(data) {
    return  {
      key: data.key,
      product_name: data.attributes.product_name,
      product_description: data.attributes.product_description,
      product_key: data.attributes.product_key,
     price_formatted: data.attributes.price_formatted
    };
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
