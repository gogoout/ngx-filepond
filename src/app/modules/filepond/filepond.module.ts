import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilePondComponent } from './filepond.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilePondComponent],
  exports: [
    FilePondComponent
  ]
})
export class FilePondModule { }
