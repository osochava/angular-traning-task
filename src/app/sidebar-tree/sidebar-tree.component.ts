import {Component, OnInit} from '@angular/core';
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
export class SidebarTreeComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<Category>;
  nestedDataSource: MatTreeNestedDataSource<Category>;
  categories: any;

  constructor(private route: ActivatedRoute)  {
    this.nestedTreeControl = new NestedTreeControl<Category>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
  }

  ngOnInit() {
    this.nestedDataSource.data = this.route.snapshot.data['categories'];
  }

  hasChild(_: number, node: Category) {
    return node.subcategories != null && node.subcategories.length > 0;
  }

  private _getChildren = (node: Category) => of(node.subcategories);

}
