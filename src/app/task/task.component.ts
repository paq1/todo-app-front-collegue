import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() description: number;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

}
