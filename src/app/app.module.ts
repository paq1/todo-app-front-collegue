import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { TaskService } from './services/tasks.service';
import { TaskGroupService } from './services/taskgroup.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskGroupComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ TaskService, TaskGroupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
