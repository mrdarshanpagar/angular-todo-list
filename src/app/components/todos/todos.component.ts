import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent]
})

export class TodosComponent {
 
  todos: Todo[]

  constructor(){
    this.todos = []
    let localItems = localStorage.getItem("todos")

    if(localItems == null){
      this.todos = []
    }else{
      this.todos = JSON.parse(localItems)
    }
    
  }

  generateUniqueSno(): number {
    let sno = 99
    do {
      sno = Math.floor(Math.random() * 10000) + 1; // Generates a random number between 1 and 10000
    } while (this.todos.some(todo => todo.sno === sno)); // Checks if the generated number is already used
    return sno;
  }


  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  addTodo(todo: Todo){
    todo.sno = this.generateUniqueSno();
    this.todos.push(todo)
    console.log(this.todos)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))

  }
}
