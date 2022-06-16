import { Component, OnInit, Input } from '@angular/core'
import type { ButtonColor } from './button.interface'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'button'
  @Input() color: ButtonColor = 'default'
  @Input() text: string = ''
  @Input() leftIcon: string = ''
  @Input() icon: string = ''
  @Input() disabled: boolean = false

  constructor() {}

  get buttonClasses(): string[] {
    return ['app-button', 'button-' + this.color]
  }

  get iconClasses(): string[] {
    return ['bi', 'bi-' + this.icon]
  }

  get leftIconClasses(): string[] {
    return ['bi', 'bi-' + this.leftIcon]
  }

  ngOnInit(): void {}
}
