import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, DragDropModule, ReactiveFormsModule],
  declarations: [],
  exports: [],
})
export class LibAppSharedModule {}
