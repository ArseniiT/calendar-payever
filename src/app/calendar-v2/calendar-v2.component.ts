import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar-v2',
  standalone: true,
  imports: [MatDatepickerModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './calendar-v2.component.html',
  styleUrl: './calendar-v2.component.css'
})
export class CalendarV2Component {
  selectedDate(selectedDate: Date) {
    console.log(selectedDate);
  }
}
