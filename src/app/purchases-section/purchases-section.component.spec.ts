import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesSectionComponent } from './purchases-section.component';

describe('PurchasesSectionComponent', () => {
  let component: PurchasesSectionComponent;
  let fixture: ComponentFixture<PurchasesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
