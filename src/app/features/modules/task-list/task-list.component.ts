import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  display: boolean = false;
  addTask: any;

  addTaskForm = this.fb.group(
    {
      id: this.fb.control(''),
      taskAssignedTo: this.fb.control(''),
      description: this.fb.control(''),
      status: this.fb.control('')
    }
  )

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  openPopupFn() {
    this.display = true;
  }

  addTaskFn() {
    this.addTask = this.addTaskForm.value
    console.log(this.addTaskForm.value);
    this.display = false;
  }
}
