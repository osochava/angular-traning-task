import { Category } from './category';

export const CATEGORIES: Category[] = [
  { name: 'Women', children: [{name: 'shoes', children: [{name: 'Everyday shoes', children: []}, {name: 'Party shoes', children: []}]},
      {name: 'clothing', children: [{name: 'party dresses', children: []}, {name: 'tops', children: []}]}] },
  { name: 'Men' , children: [{name: 'shoes', children: [{name: 'Everyday shoes', children: []}, {name: 'Party shoes', children: []}]},
      {name: 'clothing', children: [{name: 'T-shirts', children: []}, {name: 'jeans', children: []}]}] },
  { name: 'More', children: [{name: 'clothing', children: []}] }
];


export const TREE_DATA = JSON.stringify({
  'Women': {
    'shoes': {
     'Everyday shoes': {},
      'Party shoes': {}
    },
    'clothing': {
      'party dresses': {},
      'tops': {}
    }
  }
});

