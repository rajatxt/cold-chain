import { Component, OnInit, Input } from '@angular/core'
import type { LoaderFill } from './loader.interface'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() fill: LoaderFill = 'light'

  constructor() {}

  get loaderClasses(): string[] {
    return ['app-loader', 'loader-' + this.fill]
  }

  ngOnInit(): void {}
}
