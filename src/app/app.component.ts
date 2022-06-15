import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'cold-chain'
  public expandedView: boolean = false

  public handleSidebarToggleAction(): void {
    this.expandedView = !this.expandedView
  }
}
