import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsPlaceComponent } from './collections-place.component';

describe('CollectionsPlaceComponent', () => {
  let component: CollectionsPlaceComponent;
  let fixture: ComponentFixture<CollectionsPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
