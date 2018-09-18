import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppResolver} from './app-resolver';
import {NavigationTreeResolver} from './navigation-tree-resolver';
import {MainWrapperComponent} from './main-wrapper/main-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: MainWrapperComponent,
    resolve: {
      categories: NavigationTreeResolver
    }
  },
  {path: 'category', component: MainWrapperComponent,
    resolve: {
      categories: NavigationTreeResolver
    }},
  {
    path: 'category/:key',
    component: MainWrapperComponent,
    resolve: {
      categories: NavigationTreeResolver,
      products: AppResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
