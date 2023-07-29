import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddNewCategoryModalComponent } from './add-new-category-modal/add-new-category-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewCategoryModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
