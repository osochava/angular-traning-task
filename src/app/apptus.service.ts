import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Product} from './product';

const IMAGEPREFIX = 'https://s3.eu-central-1.amazonaws.com/showcase-demo-images/fashion';
const BASEURL = 'https://api.esales.apptus.com/clusters/w2AC5A25F/panels/';

@Injectable({
  providedIn: 'root'
})
export class ApptusService {

  constructor(private httpClient: HttpClient) {
  }

  public getCategoryPage1(key: string): Observable<any> {
    const url = 'category-page';
    const params = new HttpParams()
      .set('sessionKey', 'anonymous0')
      .set('customerKey', 'anonymous0')
      .set('arg.category_id', key)
      .set('arg.shop_language', 'en_US')
      .set('arg.facets', '')
      .set('arg.sort_products', 'relevance desc')
      .set('arg.window_first', '1')
      .set('arg.window_last', '24')
    ;
    const options = {params: params};
    return this.httpClient.get(BASEURL + url, options);
  }

  public getCategoriesTree(): Observable<any> {
    const url = 'navigation';
    const params = new HttpParams()
      .set('sessionKey', 'anonymous0')
      .set('customerKey', 'anonymous0')
      .set('market', 'UK');
    const options = {params: params};
    return this.httpClient.get(BASEURL + url, options);
  }

  public getCategoryPage(category_key: string, sort_products = 'relevance desc', page_number = 1, page_size = 24): Observable<any> {
    const _page_number = page_number + 1;
    const url = 'category-page';
    const firstProduct = (_page_number - 1) * page_size + 1;
    const lastProduct = _page_number * page_size;
    const params = new HttpParams()
      .set('sessionKey', 'anonymous0')
      .set('customerKey', 'anonymous0')
      .set('arg.category_id', category_key)
      .set('arg.shop_language', 'en_US')
      .set('arg.facets', '')
      .set('arg.sort_products', sort_products)
      .set('arg.window_first', firstProduct.toString())
      .set('arg.window_last', lastProduct.toString());
    const options = {params: params};
    return this.httpClient.get(BASEURL + url, options);
  }

}
