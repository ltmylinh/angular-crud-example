import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewerComponent } from './student-viewer.component';

describe('StudentViewerComponent', () => {
  let component: StudentViewerComponent;
  let fixture: ComponentFixture<StudentViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
