import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatMenuModule
  ],
  exports:[
    MatTableModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
