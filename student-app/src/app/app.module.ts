import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage.component';
import { StudentDashboardComponent } from './containers/student-dashboard/student-dashboard.component';
import { StudentViewerComponent } from './containers/student-viewer/student-viewer.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

import { StudentDashboardService } from './student-dashboard.service';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'students', children: [
    {path: '', component: StudentDashboardComponent},
    {path: ':id', component: StudentViewerComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentViewerComponent,
    StudentDetailComponent,
    StudentFormComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StudentDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
