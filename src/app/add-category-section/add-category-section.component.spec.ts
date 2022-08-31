import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorySectionComponent } from './add-category-section.component';

describe('AddCategorySectionComponent', () => {
  let component: AddCategorySectionComponent;
  let fixture: ComponentFixture<AddCategorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategorySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
