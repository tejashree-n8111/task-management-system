import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html',
  styleUrls: ['./pending-task.component.scss']
})
export class PendingTaskComponent implements OnInit, OnChanges {
  @Input() addTask: any;
  pendingTasks: any;

  constructor(private taskListService: TaskListService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.addTask) {
      this.addPendingTaskFn()
    }

  }

  ngOnInit(): void {
    this.taskListService.getPendingTaskDataFn().subscribe(
      (pendingTask: any) => {
        this.pendingTasks = pendingTask
      },
      (error) => { console.log(error) }
    )

    this.taskListService.passTaskDataChannel.subscribe(
      (pData: any) => {
        console.log(pData);
        if (pData.status == 'pending') {
          this.pendingTasks.push(pData)
        }
      }
    )

  }

  addPendingTaskFn() {
    console.log(this.addTask)

    this.pendingTasks.push(this.addTask)

  }

  changePendingStatusFn(pendingTask: any, index: any) {
    pendingTask.status = 'completed';

    this.taskListService.passTaskDataChannel.next(pendingTask);

    // delete this.completedTasks[index]

    this.pendingTasks.splice(index, 1);
  }
}
