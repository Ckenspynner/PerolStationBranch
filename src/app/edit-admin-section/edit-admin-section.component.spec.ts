import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminSectionComponent } from './edit-admin-section.component';

describe('EditAdminSectionComponent', () => {
  let component: EditAdminSectionComponent;
  let fixture: ComponentFixture<EditAdminSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdminSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdminSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
