import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {AppComponent} from './app.component';
import {SidebarTreeComponent} from './sidebar-tree/sidebar-tree.component';
import {ListOfProductsComponent} from './list-of-products/list-of-products.component';
import {ListitemProductcardComponent} from './listitem-productcard-component/listitem-productcard.component';
import {AppRoutingModule} from './app-routing.module';
import {AppResolver} from './app-resolver';
import {NavigationTreeResolver} from './navigation-tree-resolver';
import {ApptusService} from './apptus.service';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
})
class DemoMaterialModule {
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarTreeComponent,
    ListOfProductsComponent,
    ListitemProductcardComponent,
    MainWrapperComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DemoMaterialModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [
    ApptusService,
    AppResolver,
    NavigationTreeResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
