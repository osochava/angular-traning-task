import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemProductcardComponent } from './listitem-productcard.component';

describe('ListitemProductcardComponent', () => {
  let component: ListitemProductcardComponent;
  let fixture: ComponentFixture<ListitemProductcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListitemProductcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListitemProductcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
