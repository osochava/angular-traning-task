import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatTreeModule, MatIconModule} from '@angular/material';
import {AppComponent} from './app.component';
import {SidebarTreeComponent} from './sidebar-tree/sidebar-tree.component';

@NgModule({
  exports: [
    MatTreeModule
  ],
  declarations: [
    AppComponent,
    SidebarTreeComponent
  ],
  imports: [
    BrowserModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
