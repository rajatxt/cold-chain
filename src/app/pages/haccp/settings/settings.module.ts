import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SettingsComponent } from './settings.component'

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
]

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SettingsModule {}
