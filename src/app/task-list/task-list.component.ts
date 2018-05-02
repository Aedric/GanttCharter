import { Component, OnInit } from '@angular/core';
import { Task } from '../scheduling.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task: Task;
  tasks: Task[];
  TASK_DATA: Task[];

  dataSource = TEST_DATA;
  displayedColumns = ['name', 'dependencies', 'duration', 'resources'];

  constructor() { }

  addTask(newTask) {

  }
  ngOnInit() {
  }

}

const TEST_DATA: Task[] = [
  {name: 'Task1', dependencies: [], resources: [], duration: 6 }
];
