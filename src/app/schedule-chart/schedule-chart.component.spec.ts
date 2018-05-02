import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleChartComponent } from './schedule-chart.component';

describe('ScheduleChartComponent', () => {
  let component: ScheduleChartComponent;
  let fixture: ComponentFixture<ScheduleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
