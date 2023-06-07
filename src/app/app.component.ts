import { Component } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filter: string = '';

  addTask(task: string) {
    const newTask: Task = {
      name: task,
      completed: false
    };
    this.tasks.push(newTask);
    this.applyFilter('');
  }

  applyFilter(filter: string) {
    this.filter = filter;
    if (this.filter === 'all') {
      this.filteredTasks = this.tasks;
    } else if (this.filter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (this.filter === 'uncompleted') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }
  
}
