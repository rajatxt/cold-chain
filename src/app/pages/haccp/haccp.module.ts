import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HaccpComponent } from './haccp.component'
import { ActivityModule } from '../../components/activity/activity.module'
import { TabsComponent } from '../../components/tabs/tabs.component'

const routes: Routes = [
  {
    path: '',
    component: HaccpComponent,
    children: [
      {
        path: 'checklists',
        data: {
          key: 'checklists',
        },
        loadChildren: () =>
          import('./checklists/checklists.module').then(
            (mod) => mod.ChecklistsModule
          ),
      },
      {
        path: 'settings',
        data: {
          key: 'settings',
        },
        loadChildren: () =>
          import('./settings/settings.module').then(
            (mod) => mod.SettingsModule
          ),
      },
    ],
  },
]

@NgModule({
  declarations: [HaccpComponent, TabsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ActivityModule],
})
export class HaccpModule {}
