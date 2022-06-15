import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { TabItem } from '../../components/tabs/tabs.interface'

@Component({
  selector: 'app-haccp',
  templateUrl: './haccp.component.html',
  styleUrls: ['./haccp.component.scss'],
})
export class HaccpComponent implements OnInit {
  public activeTab: string = ''
  public haccpTabs: TabItem[] = [
    {
      key: "checklists",
      label: "Checklists",
      action: () => {
        this.router.navigate(['haccp', 'checklists'])
      }
    },
    {
      key: "settings",
      label: "Settings",
      action: () => {
        this.router.navigate(['haccp', 'settings'])
      }
    }
  ]

  constructor(private router: Router) {
    switch(this.router.url) {
      case '/haccp/checklists': {
        this.activeTab = 'checklists'
        break
      }
      
      case '/haccp/settings': {
        this.activeTab = 'settings'
        break
      }
    }
  }
  ngOnInit(): void {}
}
