import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-category-modal',
  templateUrl: './add-new-category-modal.component.html',
  styleUrls: ['./add-new-category-modal.component.sass']
})
export class AddNewCategoryModalComponent {

  @Input() isOpen: boolean | undefined;
  @Output() close = new EventEmitter();
  @Output() addCategory = new EventEmitter<string>();

  newCategoryName: string = '';

  getNewCategoryName = (e: Event): void => {
    this.newCategoryName = (e.target as HTMLInputElement).value;
  }

  confirm = (): void => {
    this.addCategory.emit(this.newCategoryName);
  }
  
}
