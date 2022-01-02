import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealEditorComponent, DealListItemComponent } from './index';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DealListItemComponent,
    DealEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DealListItemComponent,
    DealEditorComponent
  ]
})
export class DealModule { }
