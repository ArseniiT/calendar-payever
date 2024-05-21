import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Reminder } from '../../models/reminder.model';
import { ReminderService } from '../../services/reminder.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  @Input() selectedDate!: Date;
  reminders: Reminder[] = [];

  constructor(private reminderService: ReminderService) { }

  ngOnInit(): void {
    this.getReminders();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDate'] && !changes['selectedDate'].firstChange) {
      this.getReminders();
    }
  }

  getReminders(): void {
    if (this.selectedDate) {
      this.reminders = this.reminderService.getRemindersByDate(this.selectedDate);
    }
  }

  creatReminder(): void {
    // open dialog to create reminder
  }
}
