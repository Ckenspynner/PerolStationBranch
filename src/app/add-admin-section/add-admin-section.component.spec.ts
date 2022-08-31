import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminSectionComponent } from './add-admin-section.component';

describe('AddAdminSectionComponent', () => {
  let component: AddAdminSectionComponent;
  let fixture: ComponentFixture<AddAdminSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
