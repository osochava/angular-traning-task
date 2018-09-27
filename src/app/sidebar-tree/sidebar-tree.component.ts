import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {Category} from '../category';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar-tree',
  templateUrl: './sidebar-tree.component.html',
  styleUrls: ['./sidebar-tree.component.css']
})
export class SidebarTreeComponent implements OnInit, OnDestroy {

  nestedTreeControl: NestedTreeControl<Category>;
  nestedDataSource: MatTreeNestedDataSource<Category>;
  categories: [Category];
  navigationSubscription: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.nestedTreeControl = new NestedTreeControl<Category>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
  }

  initialiseInvites() {
    this.nestedDataSource.data = this.activatedRoute.snapshot.data['categories'];
  }

  ngOnInit() {
    this.initialiseInvites();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  hasChild(_: number, node: Category) {
    return node.subcategories != null && node.subcategories.length > 0;
  }

  private _getChildren = (node: Category) => of(node.subcategories);

}
