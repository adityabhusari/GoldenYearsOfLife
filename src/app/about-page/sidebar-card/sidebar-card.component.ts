import { Component, Input, OnInit } from '@angular/core';
import { SidebarCard } from 'src/app/interfaces/sidebar-card';

@Component({
  selector: 'app-sidebar-card',
  templateUrl: './sidebar-card.component.html',
  styleUrls: ['./sidebar-card.component.scss']
})
export class SidebarCardComponent implements OnInit {

  @Input() sidebarCard : SidebarCard;

  constructor() { }

  ngOnInit(): void {
  }

}
