import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCategoryModalComponent } from './add-new-category-modal.component';

describe('AddNewCategoryModalComponent', () => {
  let component: AddNewCategoryModalComponent;
  let fixture: ComponentFixture<AddNewCategoryModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCategoryModalComponent]
    });
    fixture = TestBed.createComponent(AddNewCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
