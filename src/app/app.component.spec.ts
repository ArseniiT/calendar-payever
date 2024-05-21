import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalendarV1Component } from './components/calendar/calendar.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CalendarV1Component],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'calendar' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calendar');
  });

  it('should render app-calendar-v1 component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const calendarElement: DebugElement = fixture.debugElement.query(By.css('app-calendar-v1'));
    expect(calendarElement).toBeTruthy();
  });

  it('should call onDateSelected and set selectedDate when a date is selected in the calendar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'onDateSelected').and.callThrough();
    const testDate = new Date(2024, 4, 15);

    const calendarComponent = fixture.debugElement.query(By.directive(CalendarV1Component)).componentInstance as CalendarV1Component;
    calendarComponent.selected.emit(testDate);
    fixture.detectChanges();

    expect(component.onDateSelected).toHaveBeenCalledWith(testDate);
    expect(component.selectedDate).toBe(testDate);
  });

  it('should display selected date in the console when a date is selected', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(console, 'log');
    const testDate = new Date(2024, 4, 15);

    component.onDateSelected(testDate);
    expect(console.log).toHaveBeenCalledWith(testDate);
  });

  it('should style the container correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const containerElement: HTMLElement = fixture.debugElement.query(By.css('.container')).nativeElement;
    const styles = getComputedStyle(containerElement);

    expect(styles.display).toBe('flex');
    expect(styles.justifyContent).toBe('center');
    expect(styles.alignItems).toBe('center');
    expect(parseInt(styles.height)).toBe(window.innerHeight);
  });
});
