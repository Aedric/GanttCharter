import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TaskListComponentComponent } from './task-list-component.component';
import { SchedulingService } from '../scheduling.service';
import { SchedulingStubService } from '../scheduling-stub.service';

describe('TaskListComponentComponent', () => {
  let component: TaskListComponentComponent;
  let fixture: ComponentFixture<TaskListComponentComponent>;
  let schedulingService: SchedulingService;

  beforeEach(async(() => {
    schedulingService = new SchedulingStubService;
    TestBed.configureTestingModule({
      providers: [
        {provide: SchedulingService, useValue:  this.schedulingService}
      ],
      declarations: [ TaskListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([SchedulingService], (service: SchedulingService) => {
    expect(component).toBeTruthy();
  }));
});
