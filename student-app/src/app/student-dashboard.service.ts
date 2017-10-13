import { Injectable } from '@angular/core';
import { Student } from './models/student.interface';

@Injectable()
export class StudentDashboardService {

  constructor() { }
  // constructor(private http: Http){}

  // getStudents() : Observable<Student[]> {
  //   return this.http
  //               .get(STUDENT_API)
  //               .map((response: Response) => response.json());
  // }

  // getStudentById(id: number) : Observable<Student>{
  //   return this.http.get(`${STUDENT_API}/${id}`)
  //   // return this.http.get("student.json")
  //           .map((response: Response) => response.json());
  // }

  // updateStudent(student: Student) : Observable<Student> {
  //   return this.http
  //               .put(`${STUDENT_API}/${student.id}`, student)
  //               .map((response: Response) => response.json());
  // }

  // deleteStudent(student: Student): Observable<Student[]>{
  //   return this.http
  //             .delete(`${STUDENT_API}/${student.id}`)
  //             .map((response: Response) => response.json());
  // }

  private students: Student[] = [
    { 'id': 0, 'name': 'John', 'age': 17, 'gender': 'Male', 'grade': 'Grade 7' },
    { 'id': 1, 'name': 'Anna', 'age': 18, 'gender': 'Female', 'grade': 'Grade 7'},
    { 'id': 2, 'name': 'Olivia', 'age': 20, 'gender': 'Female', 'grade': 'Grade 7'},
    { 'id': 3, 'name': 'Ryan', 'age': 17, 'gender': 'Male', 'grade': 'Grade 7'}
  ];

  getStudents (): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student {
    return this.students.find((student) => student.id === id);
  }


  addStudent(data: any) {
    const student = {
      id: this.students.length - 1,
      name: data.name,
      age: data.age,
      gender: data.gender,
      grade: data.grade
    };

    this.students.push(student);
  }

  updateStudent(id: number, value: any) {
    const updateItem = this.students.find((student) => student.id === id);

    if (updateItem) {
      updateItem.name = value.name;
      updateItem.age = value.age;
      updateItem.gender = value.gender;
      updateItem.grade = value.grade;
    }

  }

  deleteStudent(student: Student) {
    return this.students.splice(this.students.indexOf(student), 1);
  }
}
