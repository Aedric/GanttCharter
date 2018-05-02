import { Injectable } from '@angular/core';
import { SchedulingService, Task, ScheduledTask } from './scheduling.service';

@Injectable()
export class SchedulingStubService extends SchedulingService {

  _response?: ScheduledTask[];  /// Prepare some static records for testing
  _cb?: (tasks: Task[]) => void; // Could contain some `expect` statements for ensuring correct input

  scheduleTasks (tasks: Task[]): ScheduledTask[] {
    if (this._cb ) {
      this._cb(tasks);
    }
    return this._response;
  }

  anticipateInput (tasks: Task[], response: ScheduledTask[], cb?: (tasks: Task[]) => void) {
    this._response = response;
    this._cb = cb;
  }

}
