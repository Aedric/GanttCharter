import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { SchedulingService } from '../scheduling.service';
import { SchedulingStubService } from '../scheduling-stub.service';

describe('TaskListComponentComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let schedulingService: SchedulingService;

  beforeEach(async(() => {
    schedulingService = new SchedulingStubService;
    TestBed.configureTestingModule({
      providers: [
        {provide: SchedulingService, useValue:  this.schedulingService}
      ],
      declarations: [ TaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([SchedulingService], (service: SchedulingService) => {
    expect(component).toBeTruthy();
  }));
});
