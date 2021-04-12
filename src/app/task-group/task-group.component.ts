import { Component, OnInit } from '@angular/core';
import { TaskGroupService } from '../services/taskgroup.service';
import { TaskService } from '../services/tasks.service';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.scss']
})
export class TaskGroupComponent implements OnInit {
  
  tasks: any;
  taskgroups: any;

  constructor(private taskService: TaskService, private taskGroupService: TaskGroupService) { }

  ngOnInit(): void {
    this.initTasks();
  }

  initTasks(): void {
    this.taskService.getTasks().subscribe(
      (data) => { this.tasks = data; },
      (err) => { console.log(err); },
      () => { console.log('done loading tasks'); }
    );

    this.taskGroupService.getTaskGroups().subscribe(
      (data) => { this.taskgroups = data; },
      (err) => { console.log(err); },
      () => { console.log('done loading task group'); }
    );
  }
}
