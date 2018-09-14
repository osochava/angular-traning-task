import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


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

}
