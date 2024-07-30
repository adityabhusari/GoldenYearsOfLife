import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
