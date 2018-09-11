import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ScheduleChartComponent } from './schedule-chart/schedule-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ScheduleChartComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [TaskListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
