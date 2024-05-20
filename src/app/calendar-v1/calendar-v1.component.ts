import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calendar-v1',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './calendar-v1.component.html',
  styleUrls: ['./calendar-v1.component.css']
})
export class CalendarV1Component implements OnInit {

  @Output() selected = new EventEmitter<Date>();

  selectedDate!: Date;
  currentDate!: Date;
  daysInMonth!: number[];
  blankDays!: number[];
  weekDays: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  showYears: boolean = false;
  years: number[] = [];
  startYear!: number;
  endYear!: number;

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.selectedDate = new Date();
    this.generateCalendar();
    this.generateYears();
  }

  generateCalendar() {
    this.daysInMonth = [];
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    this.blankDays = Array(firstDayOfMonth).fill(0);

    for (let i = 1; i <= daysInMonth; i++) {
      this.daysInMonth.push(i);
    }
  }

  generateYears(startYear?: number) {
    this.years = [];
    const currentYear = this.currentDate.getFullYear();
    const baseYear = startYear ?? (currentYear - 10);
    this.startYear = baseYear;
    this.endYear = baseYear + 19;

    for (let i = this.startYear; i <= this.endYear; i++) {
      this.years.push(i);
    }
  }

  nextMonth() {
    if (this.showYears) {
      this.generateYears(this.startYear + 20);
    } else {
      const newDate = new Date(this.currentDate);
      newDate.setMonth(newDate.getMonth() + 1);
      this.currentDate = newDate;
      this.generateCalendar();
    }
  }

  prevMonth() {
    if (this.showYears) {
      this.generateYears(this.startYear - 20);
    } else {
      const newDate = new Date(this.currentDate);
      newDate.setMonth(newDate.getMonth() - 1);
      this.currentDate = newDate;
      this.generateCalendar();
    }
  }

  selectDay(day: number) {
    this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
    this.selected.emit(this.selectedDate);
    // console.log(this.selectedDate);
  }

  isSelectedDay(day: number): boolean {
    return this.selectedDate &&
      this.selectedDate.getFullYear() === this.currentDate.getFullYear() &&
      this.selectedDate.getMonth() === this.currentDate.getMonth() &&
      this.selectedDate.getDate() === day;
  }

  toggleYearsView() {
    this.showYears = !this.showYears;
    if (this.showYears) {
      this.generateYears();
    }
  }

  selectYear(year: number) {
    const newDate = new Date(year, this.currentDate.getMonth(), this.currentDate.getDate());
    this.currentDate = newDate;
    this.showYears = false;
    this.generateCalendar();
  }
}
