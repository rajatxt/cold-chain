import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean = false
  @Output() toggle = new EventEmitter()

  constructor() {}
  ngOnInit(): void {}

  public toggleSidebarView(): void {
    this.toggle.emit()
  }
}
