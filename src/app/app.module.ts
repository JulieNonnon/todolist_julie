import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateTaskButtonComponent } from './components/create-task-button/create-task-button.component';
import { ModifyTaskButtonComponent } from './components/modify-task-button/modify-task-button.component';
import { ValidateTaskButtonComponent } from './components/validate-task-button/validate-task-button.component';
import { TodoListTasksComponent } from './pages/todo-list-tasks/todo-list-tasks.component';
import { TodoAddTaskComponent } from './pages/todo-add-task/todo-add-task.component';
import { TodoHistoryTasksComponent } from './pages/todo-history-tasks/todo-history-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateTaskButtonComponent,
    ModifyTaskButtonComponent,
    ValidateTaskButtonComponent,
    TodoListTasksComponent,
    TodoAddTaskComponent,
    TodoHistoryTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
