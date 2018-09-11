import { Component, OnInit } from '@angular/core';
import { Task } from '../scheduling.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task: Task;
  TASK_DATA: Task[];
  dependencies: string[];


  dataSource = TEST_DATA;
  displayedColumns = ['name', 'dependencies', 'resources', 'duration'];

  constructor() { }

  addTask(newTask) {

  }
  ngOnInit() {
    this.task.dependencies = [

    ];
  }

}

const TEST_DATA: Task[] = [
  {name: 'Task1', dependencies: [], resources: [], duration: 6 }
];
