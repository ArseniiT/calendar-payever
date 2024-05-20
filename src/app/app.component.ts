import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarV2Component } from "./calendar-v2/calendar-v2.component";
import { CalendarV1Component } from "./calendar-v1/calendar-v1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CalendarV2Component, CalendarV1Component]
})
export class AppComponent {
  title = 'calendar';
  selectedDate!: Date;

  onDateSelected(date: Date) {
    console.log(date);
    this.selectedDate = date;
  }
}
