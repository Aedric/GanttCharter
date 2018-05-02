import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ScheduleChartComponent } from './schedule-chart/schedule-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ScheduleChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
