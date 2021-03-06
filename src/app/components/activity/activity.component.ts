import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  @Input() title: string = ''

  constructor() {}
  ngOnInit(): void {}
}
