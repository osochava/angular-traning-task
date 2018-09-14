import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {Category} from '../category';
import {CATEGORIES, TREE_DATA} from '../mock-categories';
import {BehaviorSubject, of} from 'rxjs';

@Injectable()
export class CategoryDatabase {
  dataChange = new BehaviorSubject<Category[]>([]);

  get data(): Category[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildCategoryTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildCategoryTree(obj: object, level: number): Category[] {
    return Object.keys(obj).reduce<Category[]>((accumulator, key) => {
      const value = obj[key];
      const node = new Category();
      node.name = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildCategoryTree(value, level + 1);
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}



@Component({
  selector: 'app-sidebar-tree',
  templateUrl: './sidebar-tree.component.html',
  styleUrls: ['./sidebar-tree.component.css'],
  providers: [CategoryDatabase]
})
export class SidebarTreeComponent {

  nestedTreeControl: NestedTreeControl<Category>;
  nestedDataSource: MatTreeNestedDataSource<Category>;

  constructor(database: CategoryDatabase) {
    this.nestedTreeControl = new NestedTreeControl<Category>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasChild(_: number, node: Category) {
    console.log(node);
    return node.children != null && node.children.length > 0;
  }

  private _getChildren = (node: Category) => of(node.children);

}
