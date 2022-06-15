import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'notifeye',
    loadChildren: () =>
      import('./pages/notifeye/notifeye.module').then(
        (mod) => mod.NotifeyeModule
      ),
  },
  {
    path: 'haccp',
    loadChildren: () =>
      import('./pages/haccp/haccp.module').then((mod) => mod.HaccpModule),
  },
  {
    path: 'rts',
    loadChildren: () =>
      import('./pages/rts/rts.module').then((mod) => mod.RtsModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./pages/reports/reports.module').then((mod) => mod.ReportsModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (mod) => mod.SettingsModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
