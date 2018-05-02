import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { ScheduleChartComponent } from './schedule-chart/schedule-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponent,
    ScheduleChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
