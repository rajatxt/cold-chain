import { Component, OnInit, Input } from '@angular/core'
import { TabItem } from './tabs.interface'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() list: TabItem[] = []
  @Input() active: string = ''

  constructor() {}
  ngOnInit(): void {}

  public handleTabItemClickAction(tab: TabItem): void {
    if ('action' in tab && typeof tab.action === 'function') {
      tab.action()
    }

    this.active = tab.key
  }
}
