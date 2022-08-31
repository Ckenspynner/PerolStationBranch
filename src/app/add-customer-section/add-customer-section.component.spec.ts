import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerSectionComponent } from './add-customer-section.component';

describe('AddCustomerSectionComponent', () => {
  let component: AddCustomerSectionComponent;
  let fixture: ComponentFixture<AddCustomerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
