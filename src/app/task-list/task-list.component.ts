import { Component, OnInit } from '@angular/core';
import { Task } from '../scheduling.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  columns: any[];

  constructor() { }
  ngOnInit() {
  }

}
