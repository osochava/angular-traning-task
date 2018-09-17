import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemProductcardComponentComponent } from './listitem-productcard-component.component';

describe('ListitemProductcardComponentComponent', () => {
  let component: ListitemProductcardComponentComponent;
  let fixture: ComponentFixture<ListitemProductcardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListitemProductcardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListitemProductcardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
