import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarV1Component } from './calendar-v1.component';

describe('CalendarV1Component', () => {
  let component: CalendarV1Component;
  let fixture: ComponentFixture<CalendarV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarV1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
