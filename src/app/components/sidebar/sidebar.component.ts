import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { IsActiveMatchOptions } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean = false
  @Output() toggle = new EventEmitter()

  public haccpRouteOption: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    paths: 'subset',
    fragment: 'ignored'
  }

  constructor() {}
  ngOnInit(): void {}

  public toggleSidebarView(): void {
    this.toggle.emit()
  }
}
