import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddTaskComponent } from './pages/todo-add-task/todo-add-task.component';
import { TodoHistoryTasksComponent } from './pages/todo-history-tasks/todo-history-tasks.component';
import { TodoListTasksComponent } from './pages/todo-list-tasks/todo-list-tasks.component';

const routes: Routes = [
  { path: "", component: TodoListTasksComponent},
  { path: "todo-add-task", component: TodoAddTaskComponent},
  { path: "todo-history-tasks", component: TodoHistoryTasksComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
