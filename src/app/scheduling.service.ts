import { Injectable } from '@angular/core';

export class ScheduleBlock {

}

export class Resource {

}

export class ScheduledTask {
  constructor(
    public task: Task,
    public startTime: number
  ) {

  }
}

export class Task {

  constructor(
    public name: string,
    public dependencies: Task[],
    public duration: number,
    public resources: Resource[]
  ) { }

}

export class TaskNode {
  constructor(
    public task: Task
  ) {

  }
}

@Injectable()
export class SchedulingService {

  constructor() { }

  scheduleTasks (tasks: Task[]): ScheduledTask[] {

  }

}
