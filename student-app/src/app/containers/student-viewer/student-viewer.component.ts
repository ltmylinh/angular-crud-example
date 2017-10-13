import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StudentDashboardService } from './../../student-dashboard.service';
import { Student } from './../../models/student.interface';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-viewer',
  templateUrl: './student-viewer.component.html',
  styleUrls: ['./student-viewer.component.css']
})
export class StudentViewerComponent implements OnInit {

  student: Student;
  isUpdate = false;

  constructor(private router: Router,
      private route: ActivatedRoute,
        private studentService: StudentDashboardService){}

  ngOnInit() {
    // this.route.params.switchMap((data: Student) => {return this.studentService.getStudentById(data.id);})
    //     .subscribe((data: Student) => this.student = data);
    this.route.params
        .subscribe((params: Params) => {
          if(parseInt(params.id) !== -1) {
            this.isUpdate = true;
            this.student = this.studentService.getStudentById(parseInt(params.id));
          // } else {
          //   this.student = {id: -1, name: '', age: 0, gender: '', grade: ''};
          }
        });
  }

  goBackStudentList() {
    this.router.navigate(['/students']);
  }

  onSubmitStudentForm(event: any) {
    // this.studentService.updateStudent(event)
    //     .subscribe((data: Student) => this.student = data);
    if (this.student) {
      this.studentService.updateStudent(this.student.id, event);
    } else {
      this.studentService.addStudent(event);
    }
    this.goBackStudentList();
  }

}
