
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentDashboardService } from './../../student-dashboard.service';
import { Student } from './../../models/student.interface';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  students: Student[];

  constructor(private router: Router,
    private studentService: StudentDashboardService
  ){}

  ngOnInit(){
    this.students = this.studentService.getStudents();
    // this.studentService
    //     .getStudents()
    //     .subscribe((data: Student[]) => this.students = data);
  }

  onAddStudent(){
    this.router.navigate(['/students', -1]);
  }

  onUpdateStudent(event: Student){
    this.router.navigate(['/students', event.id]);
  }

  onRemoveStudent(event: Student){
    // return this.studentService
    //            .deleteStudent(event)
    //            .subscribe((data: Student[]) => this.students = data);
    return this.studentService.deleteStudent(event);
  }
}
