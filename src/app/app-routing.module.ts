import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppResolver} from './app-resolver';
import {NavigationTreeResolver} from './navigation-tree-resolver';
import {MainWrapperComponent} from './main-wrapper/main-wrapper.component';
import {SortSelectorComponent} from './sort-selector/sort-selector.component';
import {ProductResolver} from './product-resolver';

const routes: Routes = [
  { path: '',  redirectTo: '/category;key=1907548051', pathMatch: 'full', runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  { path: 'select', component: SortSelectorComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
  {
    path: 'category',
    component: MainWrapperComponent,
    resolve: {
      categories: NavigationTreeResolver,
      products: AppResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    children: [
      {
        path: 'page',
        component: MainWrapperComponent,
        resolve: {
          categories: NavigationTreeResolver,
          products: AppResolver
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      }
    ]
  },

  // {
  //   path: 'category/:key',
  //   component: MainWrapperComponent,
  //   resolve: {
  //     categories: NavigationTreeResolver,
  //     products: AppResolver
  //   },
  //   runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  //   children: [
  //     {
  //       path: 'page',
  //       component: MainWrapperComponent,
  //       resolve: {
  //         categories: NavigationTreeResolver,
  //         products: AppResolver
  //       },
  //       runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
