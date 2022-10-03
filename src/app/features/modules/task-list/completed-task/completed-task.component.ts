import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  completedTasks: any;

  constructor(private taskListService: TaskListService) { }

  ngOnInit(): void {
    this.taskListService.getCompletedTaskDataFn().subscribe(
      (completedTask: any) => {
        console.log(completedTask)
        this.completedTasks = completedTask
      },
      (error) => { console.log(error) }
    )


    this.taskListService.passTaskDataChannel.subscribe(
      (cdata: any) => {
        console.log(cdata)
        if (cdata.status == 'completed') {
          this.completedTasks.push(cdata)
        }
      }
    )
  }

  changeCompletedStatusFn(completedTask: any, index: any) {
    completedTask.status = 'pending';

    this.taskListService.passTaskDataChannel.next(completedTask);

    // delete this.completedTasks[index]

    this.completedTasks.splice(index, 1);
  }

}
