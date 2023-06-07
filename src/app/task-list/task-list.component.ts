import { Component, Input } from '@angular/core';
interface Task {
  name: string;
  completed: boolean;
}
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() filter: string = 'all';
  taskStatus: boolean[] = [];

   // Resto del código del componente

   handleTaskChange(index: number) {
    this.taskStatus[index] = !this.taskStatus[index];
    console.log(this.taskStatus[index])
  }
  
  
}
