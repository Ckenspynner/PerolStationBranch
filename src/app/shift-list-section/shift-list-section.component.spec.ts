import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftListSectionComponent } from './shift-list-section.component';

describe('ShiftListSectionComponent', () => {
  let component: ShiftListSectionComponent;
  let fixture: ComponentFixture<ShiftListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftListSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
