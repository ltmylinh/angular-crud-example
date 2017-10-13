import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Student } from './../../models/student.interface';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {
  @Input() detail: Student;

  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleAdd() {
    this.add.emit();
  }

  handleUpdate() {
    this.update.emit(this.detail);
  }

  handleRemove() {
    this.remove.emit(this.detail);
  }
}

