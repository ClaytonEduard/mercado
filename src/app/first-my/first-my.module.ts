import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstMyComponent } from './first-my.component';



@NgModule({
  declarations: [FirstMyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FirstMyComponent
  ]
})
export class FirstMyModule { }
