import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarV1Component } from "./components/calendar/calendar.component";
import { ReminderComponent } from './components/reminder/reminder.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CalendarV1Component, ReminderComponent]
})
export class AppComponent {
  title = 'calendar';
  selectedDate!: Date;

  onDateSelected(date: Date) {
    console.log(date);
    this.selectedDate = date;
  }
}
