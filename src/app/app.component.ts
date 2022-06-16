import { Component } from '@angular/core'
import { Router, RoutesRecognized } from '@angular/router'
import { filter } from 'rxjs'
import type { AppLayoutType } from './app.interface'

const EXPANDED_VIEW_STATE_KEY = 'ui:expanded-layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public activeLayout: AppLayoutType = 'NONE'
  public title: string = 'cold-chain'
  public expandedView: boolean = false

  constructor(private router: Router) {
    this.expandedView = this.getLocalExpandedViewState()
    this.registerRouterEvents()
  }

  private registerRouterEvents() {
    this.router.events
      .pipe(filter(event => event instanceof RoutesRecognized))
      .subscribe((event) => {
        if (event instanceof RoutesRecognized) {
          switch (event.url) {
            case '/auth/login':
            case '/auth/signup': {
              this.activeLayout = 'AUTH'
              break
            }

            default: {
              if (this.activeLayout !== 'DEFAULT') {
                this.activeLayout = 'DEFAULT'
              }
            }
          }
        }
      })
  }

  private getLocalExpandedViewState(): boolean {
    let val = localStorage.getItem(EXPANDED_VIEW_STATE_KEY)

    if (!val) {
      localStorage.setItem(EXPANDED_VIEW_STATE_KEY, '0')
      return false
    }

    return val == '1'
  }

  private setLocalExpandedViewState(state: boolean) {
    localStorage.setItem(EXPANDED_VIEW_STATE_KEY, state ? '1' : '0')
  }

  public handleSidebarToggleAction(): void {
    this.expandedView = !this.expandedView
    this.setLocalExpandedViewState(this.expandedView)
  }
}
