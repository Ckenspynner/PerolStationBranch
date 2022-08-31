import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductSectionComponent } from './add-product-section.component';

describe('AddProductSectionComponent', () => {
  let component: AddProductSectionComponent;
  let fixture: ComponentFixture<AddProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
