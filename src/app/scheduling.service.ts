import { Injectable } from '@angular/core';

class ScheduleBlock {

}

class Resource {

}

class Task {

  constructor(
    public name: string,
    public dependencies: Task[],
    public resources: Resource[]
  ) { }

}

@Injectable()
export class SchedulingService {

  constructor() { }

}
