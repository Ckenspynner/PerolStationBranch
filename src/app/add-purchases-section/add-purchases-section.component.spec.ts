import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchasesSectionComponent } from './add-purchases-section.component';

describe('AddPurchasesSectionComponent', () => {
  let component: AddPurchasesSectionComponent;
  let fixture: ComponentFixture<AddPurchasesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPurchasesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPurchasesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
