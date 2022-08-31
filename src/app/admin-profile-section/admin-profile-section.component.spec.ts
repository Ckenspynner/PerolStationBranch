import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileSectionComponent } from './admin-profile-section.component';

describe('AdminProfileSectionComponent', () => {
  let component: AdminProfileSectionComponent;
  let fixture: ComponentFixture<AdminProfileSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfileSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
