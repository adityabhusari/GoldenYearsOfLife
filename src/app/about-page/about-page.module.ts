import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { CardComponent } from './card/card.component';
import { SidebarCardComponent } from './sidebar-card/sidebar-card.component';



@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    SidebarCardComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  exports: [
    MainComponent,
    CardComponent
  ]
})
export class AboutPageModule { }
