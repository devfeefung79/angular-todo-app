import { Component } from '@angular/core';
import { sampleData } from './data';

interface TodoItem {
  id: number,
  name: string,
  isDone: boolean
}

interface Category {
  id: number,
  name: string,
  items: Array<TodoItem>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'Angular To-Do Application';
  isOpenAddNewCat: boolean = false;
  categories: Array<Category> = sampleData || [] ;

  addCategory = (name: string): void => {
    const prevId: number = this.categories.length === 0 ? 0 : this.categories[this.categories.length-1].id;
    const newCategory: Category | undefined = { id: prevId+1, name: name, items: [] };
    this.categories.push(newCategory);
  }

  deleteCategory = (categoryId: number): void => {
    const targetIndex: number = this.categories.findIndex(cat => cat.id === categoryId);
    this.categories.splice(targetIndex, 1);
  }

  addTodo = (categoryId: number, e: Event): void => {
    const targetCategory: Category | undefined = this.categories.find(cat => cat.id === categoryId);
    const name: string = (e.target as HTMLInputElement).value;
    if (targetCategory) {
      const prevId: number = targetCategory?.items.length === 0 ? 0 : targetCategory?.items[targetCategory?.items.length-1].id;
      const newTodo: TodoItem = {
        id: prevId+1,
        name: name,
        isDone: false,
      }
      targetCategory?.items.push(newTodo);
    }
  }

  updateTodoStatus = (categoryId: number, todoId: number): void => {
    const targetCategory: Category | undefined = this.categories.find(cat => cat.id === categoryId);
    if (targetCategory) {
      const targetTodo: TodoItem | undefined = targetCategory?.items.find(todo => todo.id === todoId);
      if (targetTodo) {
        targetTodo.isDone = !targetTodo.isDone;
      }
    }
  }

  deleteTodo = (categoryId: number, todoId: number): void => {
    const targetCategory: Category | undefined = this.categories.find(cat => cat.id === categoryId);
    if (targetCategory) {
      const targetTodoIndex: number = targetCategory?.items.findIndex(todo => todo.id === todoId);
      targetCategory?.items.splice(targetTodoIndex, 1);
    }
  }

  toggleAddNewCategory = (): void => {
    this.isOpenAddNewCat = !this.isOpenAddNewCat;
  }

}
