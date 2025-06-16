import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoComponent {
  newTask: string = '';
  // 準備代辦事項陣列
  tasks: { title: string; checked: boolean }[] = [
    { title: 'Hit the gym', checked: false },
    { title: 'Pay bills', checked: true },
    { title: 'Meet George', checked: false },
    { title: 'Buy eggs', checked: false },
    { title: 'Read a book', checked: false },
    { title: 'Organize office', checked: false }
  ];

  addTask() {
    // 空白檢查
    if (this.newTask.trim() === '') {
      alert('You must write something!');
      return;
    }
    this.tasks.push({ title: this.newTask, checked: false });
    this.newTask = '';
  }
  //刪除
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
  //切換選取
  toggleChecked(task: any) {
    task.checked = !task.checked;
  }
}

