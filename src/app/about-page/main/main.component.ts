import { Component, OnInit } from '@angular/core';
import { SidebarCard } from 'src/app/interfaces/sidebar-card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sideCardList : SidebarCard[] = [{icon: "info", text: "He"}, {icon: "info", text: "He"}, {icon: "info", text: "He"}];

  constructor() { }

  ngOnInit(): void {
  }

}
