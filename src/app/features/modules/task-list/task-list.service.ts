import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private httpClient: HttpClient) { }
  passTaskDataChannel = new Subject();


  getCompletedTaskDataFn() {
    return this.httpClient.get('./assets/completedTask.json')
  }

  getPendingTaskDataFn() {
    return this.httpClient.get('./assets/pendingTask.json')
  }
}
