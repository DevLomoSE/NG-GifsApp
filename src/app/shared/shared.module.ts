import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ImportsModule } from '../imports/imports.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ImportsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
