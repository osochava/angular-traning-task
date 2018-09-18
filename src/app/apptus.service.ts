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

  public get(url: string): Observable<any> {
    const baseUTL = 'https://api.esales.apptus.com/clusters/w2AC5A25F/panels/';
    const params = new HttpParams()
      .set('sessionKey', 'anonymous0')
      .set('customerKey', 'anonymous0')
      .set('market', 'UK');
    const options = {params: params};
    return this.httpClient.get(baseUTL + url, options);
  }

  public getProducts(key: string): Observable<Product[]> {
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
    return this.httpClient.get(BASEURL + url, options).pipe(map(
      data =>  data['productListing'][0].products.map(productData => this.convertDataToProductList(productData))
    ));
  }

  public getCategoryPage(key: string): Observable<any> {
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

  public getProducts1(url: string, category_id: number, sort_products = 'relevance desc', first = 1, last = 24): Observable<any> {
    const baseUTL = 'https://api.esales.apptus.com/clusters/w2AC5A25F/panels/';
    const params = new HttpParams()
      .set('sessionKey', 'anonymous0')
      .set('customerKey', 'anonymous0')
      .set('arg.category_id', category_id.toString())
      .set('arg.shop_language', 'en_US')
      .set('arg.facets', '')
      .set('arg.sort_products', sort_products)
      .set('arg.window_first', first.toString())
      .set('arg.window_last', last.toString())
    ;
    const options = {params: params};
    return this.httpClient.get(baseUTL + url, options);
  }

  convertDataToProductList(data) {
    const image_local = data.variants ? data.variants[0].attributes.image_local : data.attributes.image_local;
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
}
