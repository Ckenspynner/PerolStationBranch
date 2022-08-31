import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProfileSectionComponent } from './staff-profile-section.component';

describe('StaffProfileSectionComponent', () => {
  let component: StaffProfileSectionComponent;
  let fixture: ComponentFixture<StaffProfileSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffProfileSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
