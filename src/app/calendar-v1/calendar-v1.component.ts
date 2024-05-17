import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calendar-v1',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './calendar-v1.component.html',
  styleUrl: './calendar-v1.component.css'
})
export class CalendarV1Component implements OnInit {

  currentDate!: Date;
  daysInMonth!: number[];

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.daysInMonth = [];
    this.generateCalendar();
  }

  selectedDate(selectedDate: Date) {
    console.log(selectedDate);
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    this.daysInMonth = [];
    for (let i = 1; i <= daysInMonth; i++) {
      this.daysInMonth.push(i);
    }
  }

  nextMonth() {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    this.currentDate = newDate;
    this.generateCalendar();
  }

  prevMonth() {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    this.currentDate = newDate;
    this.generateCalendar();
  }
}
