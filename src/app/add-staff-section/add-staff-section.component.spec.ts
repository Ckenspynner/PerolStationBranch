import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffSectionComponent } from './add-staff-section.component';

describe('AddStaffSectionComponent', () => {
  let component: AddStaffSectionComponent;
  let fixture: ComponentFixture<AddStaffSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStaffSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStaffSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
