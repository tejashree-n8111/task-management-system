import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';
import { PendingTaskComponent } from './pending-task/pending-task.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskListComponent,
    PendingTaskComponent,
    CompletedTaskComponent
  ],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    DialogModule,
    ReactiveFormsModule
  ]
})
export class TaskListModule { }
