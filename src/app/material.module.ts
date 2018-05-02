import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
