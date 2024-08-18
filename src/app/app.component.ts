import { Component } from '@angular/core';
import { TodosComponent } from './components/todos/todos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosComponent, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  searchTerm!: string
  
  onSubmit(){
    alert("Search functionality is under development")
  }
}
