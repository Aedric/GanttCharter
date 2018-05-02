import { Injectable } from '@angular/core';

export class ScheduleBlock {

}

export class Resource {

}

export class Task {

  constructor(
    public name: string,
    public dependencies: Task[],
    public resources: Resource[]
  ) { }

}

@Injectable()
export class SchedulingService {

  constructor() { }

  scheduleTasks (tasks: Task[]) {

  }

}
