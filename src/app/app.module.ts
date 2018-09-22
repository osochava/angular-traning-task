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
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
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
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SidebarTreeComponent} from './sidebar-tree/sidebar-tree.component';
import {ListOfProductsComponent} from './list-of-products/list-of-products.component';
import {ListitemProductcardComponent} from './listitem-productcard-component/listitem-productcard.component';
import {AppRoutingModule} from './app-routing.module';
import {AppResolver} from './app-resolver';
import {NavigationTreeResolver} from './navigation-tree-resolver';
import {ApptusService} from './apptus.service';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { SortSelectorComponent } from './sort-selector/sort-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarTreeComponent,
    ListOfProductsComponent,
    ListitemProductcardComponent,
    MainWrapperComponent,
    SortSelectorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
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
