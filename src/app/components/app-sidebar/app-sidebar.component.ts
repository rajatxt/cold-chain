import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  public sidebarExpanded: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSidebarView() {
    this.sidebarExpanded = !this.sidebarExpanded
  }
}
