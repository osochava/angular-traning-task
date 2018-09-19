import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppResolver} from './app-resolver';
import {NavigationTreeResolver} from './navigation-tree-resolver';
import {MainWrapperComponent} from './main-wrapper/main-wrapper.component';

const routes: Routes = [
  { path: '',  redirectTo: '/category/1907548051', pathMatch: 'full', runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  {
    path: 'category/:key',
    component: MainWrapperComponent,
    resolve: {
      categories: NavigationTreeResolver,
      products: AppResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
