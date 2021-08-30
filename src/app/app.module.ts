import { todoList } from './Components/TodoList/todoList.component';
import { listServices } from './services/list.services';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { addTodo } from './Components/addTodo/addTodo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    todoList,
    addTodo
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [listServices],
  bootstrap: [AppComponent],
})
export class AppModule { }
