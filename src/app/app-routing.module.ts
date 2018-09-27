import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppResolver} from './app-resolver';
import {NavigationTreeResolver} from './navigation-tree-resolver';
import {MainWrapperComponent} from './main-wrapper/main-wrapper.component';

const routes: Routes = [
  { path: '',  redirectTo: '/category?key=1907548051', pathMatch: 'full' },
  {
    path: 'category',
    component: MainWrapperComponent,
    resolve: {
      categories: NavigationTreeResolver,
      products: AppResolver,
      selectedCategory: AppResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    children: [
      {
        path: 'page',
        component: MainWrapperComponent,
        resolve: {
          categories: NavigationTreeResolver,
          products: AppResolver,
          selectedCategory: AppResolver
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
