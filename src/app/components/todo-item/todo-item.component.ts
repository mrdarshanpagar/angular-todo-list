import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  imports: [CommonModule]
})
export class TodoItemComponent {

  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter()

  // constructor(todo: Todo){
  //   this.todo = todo;
  // }

  onClick(todo: Todo){
    this.todoDelete.emit(todo)
  }

  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo)
  }
}
