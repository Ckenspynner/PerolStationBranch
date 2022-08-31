import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesSectionComponent } from './add-sales-section.component';

describe('AddSalesSectionComponent', () => {
  let component: AddSalesSectionComponent;
  let fixture: ComponentFixture<AddSalesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSalesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
