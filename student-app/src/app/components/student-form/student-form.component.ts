import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Student } from './../../models/student.interface';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  @Input() detail: Student;
  @Input() updating: boolean;
  @Output() update: EventEmitter<any> = new EventEmitter();

  genders: String[] = ['Male', 'Female'];
  grades: String[] = ['preK', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 7'];

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(value: any, valid: boolean) {
    if (valid) {
      this.update.emit(value);
    }
  }
}
