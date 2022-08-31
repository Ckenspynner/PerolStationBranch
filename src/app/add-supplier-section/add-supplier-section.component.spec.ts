import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierSectionComponent } from './add-supplier-section.component';

describe('AddSupplierSectionComponent', () => {
  let component: AddSupplierSectionComponent;
  let fixture: ComponentFixture<AddSupplierSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSupplierSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSupplierSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
