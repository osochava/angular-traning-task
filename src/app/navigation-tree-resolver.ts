import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {ApptusService} from './apptus.service';
import {map} from 'rxjs/operators';


@Injectable()
export class NavigationTreeResolver implements Resolve<any> {

  constructor(private apptusService: ApptusService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.apptusService.getCategoriesTree().pipe(map(
      data => data.categories[0].categoryTree.subcategories)
    );
  }
}
