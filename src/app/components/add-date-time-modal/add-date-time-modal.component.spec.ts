import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDateTimeModalComponent } from './add-date-time-modal.component';

describe('AddDateTimeModalComponent', () => {
  let component: AddDateTimeModalComponent;
  let fixture: ComponentFixture<AddDateTimeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDateTimeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDateTimeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
